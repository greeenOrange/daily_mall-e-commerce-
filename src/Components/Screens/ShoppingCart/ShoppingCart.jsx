import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../../Context/CartContextProvider';
import './ShoppingCart.css';
import { checkQuantity } from '../../../Helpers/function';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';

function ShoppingCart() {
  const { state, dispatch } = useContext(CartContext);
  const [promoCode, setPromoCode] = useState("");
  const [openModal, setOpenModal] = useState(false)

  const [deliveryDate, setDeliveryDate] = useState(() => {
    const current = new Date();
    current.setDate(current.getDate() + 10);
    return current.toDateString();

  });

  const handleOpenModal = () => {
      setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };
  
  const handleConfirmRemove = (pd) => {
    dispatch({ type: "REMOVE_ITEM", payload: pd })  
    localStorage.removeItem(pd?.id);
    toast.error('Item removed from cart') 
    handleCloseModal();
  };
  const handlePromoCodeChange = (event) => {
    const newPromoCode = event.target.value;
    setPromoCode(newPromoCode);
  };

  const handleApplyPromo = () => {
    dispatch({ type: "APPLY_PROMO", payload: promoCode });
    setPromoCode("");
  };
  const handleCheckOut = () =>{
    dispatch({ type: "CHECKOUT" })
    localStorage.clear();
    toast.success("successfully Check out!");
  }

  return (
    <section className="cart_container">
      <div className="container">
    {!state.itemCounter >= 1 || !state.checkout ?
        <div>
          <h2 className="cart_title">Shopping cart items</h2>
        <p className="cart_items">items: {state.itemCounter}</p>
        <div className="cart_items_wrapper">
          <div className="grid grid-cols-1 gap-6 h-full">
            
            {state?.itemCounter >= 1 ?
              <div className=''>
            <button
            onClick={() => dispatch({ type: "CLEAR" })}
            className="btn btn-error text-white text-lg w-full mb-4">Clear Cart</button>
            {state?.selectedItems?.map((pd) => {
              return (
                <div key={pd?.name} className="shopping_card">
                  <img src={pd?.image} alt="" className='primary_cart' />
                  <div className="shopping_cart">
                    <div className="shopping_cart_details">
                      <div className="cart_disc">
                        <h4 className="cart_disc_title">{pd?.title}</h4>
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
                    {/* dialog */}
                    {!openModal && <button onClick={handleOpenModal} className="btn btn-error lg:w-1/2">Remove</button>}
                    {openModal && <div className="modal_container">
                      <div className="modal_content">
                        <h2 className="text-3xl font-medium text-">Confirm delete</h2>
                        <p className="text-lg">Are you sure you want to delete the item ?</p>
                        <div className="flex justify-end mt-4 gap-2">
                        <button className="self-end btn btn-error text-white"
                          onClick={() => handleConfirmRemove(pd)}>Remove</button>
                          <button className="btn" onClick={handleCloseModal}>Close</button>
                        </div>
                      </div>
                    </div>}
                    {/* dialog */}

                  </div>
                </div>
              )
            })}
            </div>:
            <div className="flex justify-center items-center flex-col gap-4">
              {!state.checkout ?<p className="text-lg">Your cart is currently empty.</p>
              :
              <p className="text-lg text-green-500">Checked Out Successfully !.</p>
              }
            <Link className="text-3xl text-blue-500" to="/shops"> <FontAwesomeIcon icon={faShoppingBasket} /> Return Shop</Link>
            </div>
            }
          </div>
          <div className="shopping_calculator lg:w-9/12 sticky top-0">
            <p>Expected Delivery Date: {deliveryDate}</p>
            <div className="form-control shopping_cart_input"><div className="input-group">
              <input
                type="text"
                value={promoCode}
                onChange={handlePromoCodeChange}
                placeholder="Enter promo code: DISCOUNT10"
                className="input input-bordered lg:w-full"
              />
              <button onClick={handleApplyPromo} className="apply_btn btn text-lg">Apply</button>
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
              <div className="shopping_group_btn">
                <button
                  onClick={handleCheckOut}
                  className="checkout shopping_cart_btn btn w-full">Checkout</button>
                <Link to='/' className="shopping_cart_btn continue_btn btn w-full">Continue shopping</Link>
              </div>
            </div>
          </div>
        </div>
          <div>
          </div>
           </div>: 
           <div className="flex justify-center flex-col items-center"> 
           <h3 className="text-lg">Want To Buy?</h3>
           <Link className="text-3xl text-blue-500" to="/shops"> <FontAwesomeIcon icon={faShoppingBasket} /> Return Shop</Link>
           </div>
        }
      </div>
    </section>
  )
}

export default ShoppingCart