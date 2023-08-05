import { useReducer, createContext } from "react";

const initialState = {
  selectedItems: [],
  itemCounter: 0,
  total: 0,
  deliveryCost: 0,
  taxRate: 0.1,
  promoDiscount: 0,
  checkout: false,
};

const DELIVERY_COST_THRESHOLDS = {
  100: 50,
  2000: 20,
};

const TAX_RATE = 0.1;

const calculateDeliveryCost = (totalCost) => {
  for (const [threshold, cost] of Object.entries(DELIVERY_COST_THRESHOLDS)) {
    if (totalCost >= parseInt(threshold)) {
      return cost;
    }
  }
  return 0;
};

const calculateCartSummary = (items) => {
  const itemCounter = items.reduce((total, product) => total + product.quantity, 0);
  const total = items.reduce((total, product) => total + product.price * product.quantity, 0);

  const tax = TAX_RATE * total;
  const deliveryCost = calculateDeliveryCost(total + tax );
  const totalCost = total + tax + deliveryCost ;

  return {
    itemCounter,
    total: parseFloat(total.toFixed(2)),
    deliveryCost: parseFloat(deliveryCost.toFixed(2)),
    tax: parseFloat(tax.toFixed(2)),
    totalCost: parseFloat(totalCost.toFixed(2)),
  };
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      if (!state.selectedItems.find((item) => item.id === action.payload.id)) {
        const newSelectedItems = [...state.selectedItems, { ...action.payload, quantity: 1 }];
        return {
          ...state,
          selectedItems: newSelectedItems,
          ...calculateCartSummary(newSelectedItems, state.taxRate, state.promoCode),
          checkout: false,
        };
      }
      return state;

    case "REMOVE_ITEM":
      const newItemsRemove = state.selectedItems.filter((item) => item.id !== action.payload.id);
      return {
        ...state,
        selectedItems: newItemsRemove,
        ...calculateCartSummary(newItemsRemove, state.taxRate, state.promoCode),
        checkout: false,
      };

    case "CHANGE_QUANTITY":
      const { id, change } = action.payload;
      const updatedSelectedItems = state.selectedItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + change) } : item
      );
      return {
        ...state,
        selectedItems: updatedSelectedItems,
        ...calculateCartSummary(updatedSelectedItems, state.taxRate, state.promoCode),
      };

    case "INCREASE":
      return {
        ...state,
        ...cartReducer(state, { type: "CHANGE_QUANTITY", payload: { id: action.payload.id, change: 1 } }),
      };

    case "DECREASE":
      return {
        ...state,
        ...cartReducer(state, { type: "CHANGE_QUANTITY", payload: { id: action.payload.id, change: -1 } }),
      };

    case "APPLY_PROMO_CODE":
      return {
        ...state,
        promoCode: action.payload,
        ...calculateCartSummary(state.selectedItems, state.taxRate, action.payload),
      };
      
    case "CHECKOUT":
      return {
        ...state,
        selectedItems: [],
        itemCounter: 0,
        total: 0,
        checkout: true,
      };

    case "CLEAR":
      return {
        ...state,
        selectedItems: [],
        itemCounter: 0,
        total: 0,
        checkout: false,
      };

    default:
      return state;
  }
};

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
