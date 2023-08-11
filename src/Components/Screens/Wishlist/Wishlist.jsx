import 'react'
import { useContext } from 'react';
import { CartContext } from '../../../Context/CartContextProvider';
import './Wishlist.css'
import { IsInCart } from '../../../Helpers/function';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Wishlist() {
  const { state, dispatch } = useContext(CartContext);
  console.log(state?.wishlistItems.length <= 0);
  const handleWishlistToCart = (pd) =>{
    dispatch({ type: "ADD_ITEM", payload: pd })
    toast.success("successfully added to cart")
    dispatch({ type: "REMOVE_FROM_WISHLIST", payload: pd });
  }
  return (
    <div className="container">
    {state?.wishlistItems?.length > 0 ? (
      <div>
        {state?.wishlistItems?.map((pd, index) => (
          <div key={index} className="shopping_card mt-4">
            <img src={pd?.image} alt="" className='primary_cart' />
            <div className="shopping_cart">
              <div className="shopping_cart_details">
                <div className="cart_disc">
                  <h4 className="cart_disc_title">{pd?.title}</h4>
                  <p className="cart_stock_price">
                    <span className="cart_price">${pd?.price}</span>
                    <span className="cart_stock">in stock</span>
                  </p>
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
              </div>
              <button
                onClick={() => dispatch({ type: "REMOVE_FROM_WISHLIST", payload: pd })}
                className="self-end btn btn-error text-white">Remove</button>
                <button
                  onClick={() => handleWishlistToCart(pd)}
                  className="add_to_cart_detailst">Add To Cart</button>

            </div>
          </div>
        ))}
      </div>
    ) : (
      
      <div>
        <div className="flex justify-center flex-col items-center"> 
       {state?.selectedItems?.length > 0 ?
       <div>
        <h3 className="text-lg">Wishlist is empty</h3>
           <Link className="text-3xl text-blue-500" to="/shops"> <FontAwesomeIcon icon={faShoppingBasket} /> Return Shop</Link>
       </div>: 
          <div>
             <h3 className="text-lg">Cart and Wishlist is empty</h3>
           <Link className="text-3xl text-blue-500" to="/shops"> <FontAwesomeIcon icon={faShoppingBasket} /> Return Shop</Link>
            </div>
           
          }
          </div>
      </div>
    )}
  </div>
  )
}

export default Wishlist