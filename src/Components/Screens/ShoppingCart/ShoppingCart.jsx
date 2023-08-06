import { useContext, useState } from 'react';
import { CartContext } from '../../../Context/CartContextProvider';
import images from '../../../assets/cart_card.png'
import './ShoppingCart.css';
import { checkQuantity } from '../../../Helpers/function';
import { format } from 'date-fns';

function ShoppingCart() {
  const { state, dispatch } = useContext(CartContext);
  const [promoCode, setPromoCode] = useState("");
  const [deliveryDate, setDeliveryDate] = useState(() => {
    const current = new Date();
    current.setDate(current.getDate() + 10);
    return current.toDateString();
  });

  const handlePromoCodeChange = (event) => {
    const newPromoCode = event.target.value;
    console.log("New Promo Code:", newPromoCode);
    setPromoCode(newPromoCode);
  };

  const handleApplyPromo = () => {
    console.log("Applying Promo Code:", promoCode);
    dispatch({ type: "APPLY_PROMO", payload: promoCode });
    setPromoCode("");
  };




  return (
    <section className="cart_container">
      <div className="container">
        <h2 className="cart_title">Shopping cart items: {state.itemCounter}</h2>
        <div className="cart_items_wrapper">
          <div className="grid grid-cols-1 gap-6">
            {state?.selectedItems?.map((pd) => {
              return (
                <div key={pd?.name} className="shopping_card">
                  <img src={images} alt="" />
                  <div className="shopping_cart">
                    <div className="shopping_cart_details">
                      <div className="cart_disc">
                        <h4 className="cart_disc_title">Relaxable full shirt</h4>
                        <p className="cart_stock_price"><span className="cart_price">${pd?.price}</span> <span className="cart_stock">in stock</span></p>
                      </div>
                      <div className="shopping_price">
                        ${pd?.price}
                      </div>
                    </div>
                    <div className="cart_measurement">
                      <select className="select select-bordered max-w-xs">
                        <option disabled selected>select size</option>
                        {pd?.sizes?.map((size) => (
                          <option key={size}>{size}</option>
                        ))}
                      </select>
                      <select className="select select-bordered max-w-xs">
                        <option disabled selected>select color</option>
                        {pd?.colors?.map((color) => (
                          <option key={color}>{color}</option>
                        ))}
                      </select>

                      <div className="cart_counter">
                        {checkQuantity(state, pd.id) > 1 ?
                          <button onClick={() =>
                            dispatch({ type: "DECREASE", payload: pd })
                          } className="btn cart_plus">-</button>
                          : <button
                            className="btn cart_plus btn-disabled" tabIndex="-1" role="button" aria-disabled="true">-</button>
                        }
                        <span className="cart_number">{checkQuantity(state, pd.id)}</span>
                        <button onClick={() =>
                          dispatch({ type: "INCREASE", payload: pd })
                        } className="btn cart_plus">+</button>
                      </div>
                    </div>
                    <button
                      onClick={() => dispatch({ type: "REMOVE_ITEM", payload: pd })}
                      className="self-end btn btn-error text-white">Remove</button>
                  </div>
                </div>
              )
            })}
          </div>
          <div className="shopping_calculator lg:w-9/12">
            <p>Expected Delivery Date: {deliveryDate}</p>
            <div className="form-control shopping_cart_btn"><div className="input-group">
              <input
                type="text"
                value={promoCode}
                onChange={handlePromoCodeChange}
                placeholder="Enter promo code"
                className="input input-bordered lg:w-full"
              />
              <button onClick={handleApplyPromo} className="btn">Apply</button>
            </div>
            </div>
            <p>10% Discount</p>
            <div className="total_cart_price">
              <h6 className="subtotal"><span>subtotal</span> <span>{state.total}</span></h6>
              <p><span>delivery</span> <span>{state.deliveryCost}</span></p>
              <p><span>Discount</span> <span>{state.promoDiscount}</span></p>
              <p><span>Tax</span> <span>{state.tax}</span></p>
              <div className="divider"></div>
              <h6 className="subtotal"><span>Grand total</span>{state.totalCost}<span></span></h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ShoppingCart