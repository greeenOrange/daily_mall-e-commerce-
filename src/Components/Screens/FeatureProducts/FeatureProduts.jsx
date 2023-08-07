import 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProductsContext } from '../../../Context/ProductsContextProvider';
import './FeatureProducts.css';
import product1 from '../../../assets/products/img.png'
function FeatureProduts() {
    const products = useContext(ProductsContext);
    return (
        <section className="feature_products">
            <div className="container">
                <div className="feature_product_wrapper">
                    <div className="product_shorting">
                        <h2 className="categories_title">Categories</h2>
                        <ul className="categories_items">
                            <li className="categories_item">
                                <Link className="categories_link" to="">Bags & Shoes</Link>
                                </li>
                            <li className="categories_item">
                                <Link className="categories_link" to="">Home, Pet Appliences</Link>
                            </li>
                            <li className="categories_item">
                                <Link className="categories_link" to="">Phones & Telecom</Link>
                                </li>
                            <li className="categories_item">
                                <Link className="categories_link" to="">Computer Office & Security</Link>
                                </li>
                            <li className="categories_item">
                                <Link className="categories_link" to="">Beauty Helath & Hair</Link>
                                </li>
                            <li className="categories_item">
                                <Link className="categories_link" to="">Toy’s Kids & Babies</Link>
                                </li>
                            <li className="categories_item">
                                <Link className="categories_link" to="">Jewelry & Watches</Link>
                                </li>
                            <li className="categories_item">
                                <Link className="categories_link" to="">Women’s Fashion </Link>
                                </li>
                            <li className="categories_item">
                                <Link className="categories_link" to="">Outdoor Fun & Sports </Link>
                                </li>
                            <li className="categories_item">
                                <Link className="categories_link" to="">Home Improvement & Tools </Link>
                                </li>
                        </ul>
                        <h2 className="filter_price_title">Price</h2>
                        <div className="price_filter">
                            <input type="text" placeholder="0" className="input input-bordered w-full max-w-xs price_input" />
                            <h4 className="to_divider">To</h4>
                            <input type="text" placeholder="100" className="input input-bordered w-full max-w-xs price_input" />
                            <button className="btn">go</button>
                        </div>
                    </div>
                    <div className="feture_card_wrapper">
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