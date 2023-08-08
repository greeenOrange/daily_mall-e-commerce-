import { faPlus, faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../../Context/CartContextProvider';

const Product = ({ product }) => {
    const { dispatch} = useContext(CartContext)
    const {name, price, id, image} = product;
    return (
        <div className="primary_card">
            <Link to={`/productdetails/${id}`}><img src={image} alt="" /></Link>
            <div className="primary_card_body">
                <h3 className="card_title">{name}
                </h3>
                <div className="card_rating_price">
                    <div className="rating">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStarHalf} />
                    </div>
                    <div className="card_price">
                        <h6 className="strikeout">$40</h6>
                        <h4 className="price">{price}</h4>
                    </div>
                </div>
                <button onClick={() => dispatch({type: "ADD_ITEM", payload: product})} className="add_to_cart card-btn">
                    Add to cart
                    <span className="circle"><FontAwesomeIcon icon={faPlus} /></span>
                </button>
            </div>
        </div>
    )
}

export default Product