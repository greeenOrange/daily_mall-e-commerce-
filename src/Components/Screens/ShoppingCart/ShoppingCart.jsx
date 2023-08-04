import 'react'
import { useContext } from 'react';
import { CartContext } from '../../../Context/CartContextProvider';
import images from '../../../assets/cart_card.png'
import './ShoppingCart.css';

function ShoppingCart() {
  const { state, dispatch } = useContext(CartContext);
  return (
    <section className="cart_container">
      <div className="container">
        <h2 className="cart_title">Shopping cart</h2>
        <div className="cart_items_wrapper">
          <div className="shopping_card">
            <img src={images} alt="" />
            <div className="shopping_cart">
            <div className="shopping_cart_details">
              <div className="cart_disc">
              <h4 className="cart_disc_title">Relaxable full shirt</h4>
              <p className="cart_stock_price"><span className="cart_price">$20.00</span> <span className="cart_stock">in stock</span></p>
              </div>
              <div className="shopping_price">
              $20
            </div>
            </div>
            <div className="cart_measurement">
              <select className="select select-bordered max-w-xs">
                <option disabled selected>select size</option>
                <option>Han Solo</option>
                <option>Greedo</option>
              </select>
              <select className="select select-bordered max-w-xs">
                <option disabled selected>select color</option>
                <option>Han Solo</option>
                <option>Greedo</option>
              </select>
              <div className="cart_counter">
                <button className="cart_plus">-</button>
                <span className="cart_number">1</span>
                <button className="cart_plus">+</button>
              </div>
            </div>
            </div>
            
          </div>
          {/* <h4>
            <span>Total items: </span> {state.itemCounter}
          </h4>
          <h4>
            <span>Totoal payments: </span> $ {state.total} 
          </h4> */}
          <div className="shopping_calculator">
            <p>Delivery date 22 June 2023</p>
            <div className="form-control search_input"><div className="input-group"><input type="text" placeholder="Promo code" className="input input-bordered" /><button className="btn">Search</button></div></div>
            <p>10% Discount</p>
            <div className="total_cart_price">
              <h6><span>subtotal</span> <span>$220</span></h6>
              <p><span>subtotal</span> <span>$220</span></p>
              <p><span>subtotal</span> <span>$220</span></p>
              <div className="divider"></div> 
              <p><span>subtotal</span> <span>$220</span></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ShoppingCart