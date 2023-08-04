import { useReducer, createContext } from "react";

const initialState = {
  selectedItems: [],
  itemCounter: 0,
  total: 0,
  checkout: false,
};

const sumItems = (items) => {
  const itemCounter = items.reduce(
    (total, product) => total + product.quantity,
    0
  );
  const total = items
    .reduce((total, product) => total + product.price * product.quantity, 0)
    .toFixed(2);
  return { itemCounter, total };
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      if (!state.selectedItems.find((item) => item.id === action.payload.id)) {
        state.selectedItems.push({ ...action.payload, quantity: 1 });
        console.log(state);
      }
      return {
        ...state,
        selectedItems: [...state.selectedItems],
        ...sumItems(state.selectedItems),
        checkout: false
      };
    case "REMOVE_ITEM":
      const newSelectedItems = state.selectedItems.filter(
        (item) => item.id !== action.payload.id
      );
      console.log(state);
      return {
        ...state,
        selectedItems: [...newSelectedItems],
        ...sumItems(newSelectedItems),
        checkout: false
      };
      case "INCREASE":
        const SelectedItems = state.selectedItems.map((item) =>
          item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
        );
        return {
          ...state,
          selectedItems: SelectedItems,
          ...sumItems(SelectedItems),
        };
      case "DECREASE":
        const updatedSelectedItems = state.selectedItems.map((item) =>
          item.id === action.payload.id ? { ...item, quantity: item.quantity - 1 } : item
        );
        return {
          ...state,
          selectedItems: updatedSelectedItems,
          ...sumItems(updatedSelectedItems),
        };
      return { ...state, ...sumItems(state.selectedItems) };
    case "CHECKOUT":
      console.log(state);
      return {
        selectedItems: [],
        itemCounter: 0,
        total: 0,
        checkout: true,
      };
    case "CLEAR":
      console.log(state);
      return {
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
