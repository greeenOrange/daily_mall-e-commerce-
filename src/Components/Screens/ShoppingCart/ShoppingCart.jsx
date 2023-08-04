import 'react'
import { useContext } from 'react';
import { CartContext } from '../../../Context/CartContextProvider';
import images from '../../../assets/cart_card.png'
import './ShoppingCart.css';
import { checkQuantity } from '../../../Helpers/function';

function ShoppingCart() {
  const { state, dispatch } = useContext(CartContext);
  // const item = state?.selectedItems?.map((pd, index) => (
  //     {key: index, value: pd}
  // ))
  // console.log(item);
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
                          } className="cart_plus">-</button>
                          : <button
                            className="cart_plus btn-disabled" tabIndex="-1" role="button" aria-disabled="true">-</button>
                        }
                        <span className="cart_number">{checkQuantity(state, pd.id)}</span>
                        <button onClick={() =>
                          dispatch({ type: "INCREASE", payload: pd })
                        } className="cart_plus">+</button>
                      </div>
                    </div>
                  </div>

                </div>
              )
            })}
          </div>
          <div className="shopping_calculator lg:w-9/12">
            <p>Delivery date 22 June 2023</p>
            <div className="form-control shopping_cart_btn"><div className="input-group"><input type="text" placeholder="Promo code" className="input input-bordered lg:w-full" /><button className="btn ">Search</button></div></div>
            <p>10% Discount</p>
            <div className="total_cart_price">
              <h6 className="subtotal"><span>subtotal</span> <span>$220</span></h6>
              <p><span>delivery</span> <span>$20</span></p>
              <p><span>Tax</span> <span>$2</span></p>
              <div className="divider"></div>
              <h6 className="subtotal"><span>Grand total</span> <span>{state.total}</span></h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ShoppingCart