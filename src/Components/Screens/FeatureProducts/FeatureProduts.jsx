import 'react'
import product1 from '../../../assets/products/img.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react';
import { ProductsContext } from '../../../Context/ProductsContextProvider';
import { Link } from 'react-router-dom';
function FeatureProduts() {
    const products = useContext(ProductsContext);
    console.log(products);
    return (
        <section className="feature_products">
            <div className="container">
                <div className="feature_product_wrapper">
                    <div className="card_wrapper">
                    {products
                        .map((product, index) => {
                            return (
                                <div key={index} className="primary_card">
                                    <Link to='/productDetails'><img src={product1} alt="" /></Link>
                                    <div className="primary_card_body">
                                        <h3 className="card_title">{product?.name}
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
                                                <h4 className="price">{product?.price}</h4>
                                            </div>
                                        </div>
                                        <button className="add_to_cart card-btn">
                                            Add to cart
                                            <span className="circle"><FontAwesomeIcon icon={faPlus} /></span>
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FeatureProduts