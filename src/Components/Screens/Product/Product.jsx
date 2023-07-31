import 'react'
import { faPlus, faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import product1 from '../../../assets/products/img.png';

import '../products/products.css';

const Product = ({product}) => {
    const {name, price, description} = product;
    console.log(product);
    return (
        <div className="primary_card">
            <img src={product1} alt="" />
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
                <button className="add_to_cart card-btn">
                    Add to cart
                    <span className="circle"><FontAwesomeIcon icon={faPlus} /></span>
                </button>
            </div>
        </div>
    )
}

export default Product