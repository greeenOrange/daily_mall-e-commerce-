import { faPlus, faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../../Context/CartContextProvider';
import './Product.css'
import { shorten } from '../../../Helpers/function';
import { toast } from 'react-toastify';
// import Rating from 'react-rating';

const Product = ({ product }) => {
    const { dispatch } = useContext(CartContext);
    const { title, price, id, image, } = product;


    const handleAddTOCart = (product) => {
        dispatch({ type: "ADD_ITEM", payload: product })
        toast.success("successfully added to cart")
    }
    return (
        <div className="primary_card">
            <Link to={`/productdetails/${id}`}>
                <img src={image} alt="" className="primary_img" loading="lazy"/>
            </Link>
            <div className="primary_card_body">
                <h3 className="card_title">{shorten(title)}
                </h3>
                <div className="card_rating_price">
                    <div className="rating">
                    </div>
                    <div className="card_price">
                        <h6 className="strikeout">$40</h6>
                        <h4 className="price">{price}</h4>
                    </div>
                </div>
                <button onClick={() => handleAddTOCart(product)} className="add_to_cart card-btn">
                    Add to cart
                    <span className="circle"><FontAwesomeIcon icon={faPlus} /></span>
                </button>
            </div>
        </div>
    )
}

export default Product