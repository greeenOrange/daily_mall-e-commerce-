import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons'
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ProductsContext } from '../../../Context/ProductsContextProvider';
import './FeatureProducts.css';
import { CartContext } from '../../../Context/CartContextProvider';

function FeatureProduts({ searchQuery }) {

    const products = useContext(ProductsContext);
    const { dispatch } = useContext(CartContext);

    const [selectedCategory, setSelectedCategory] = useState(null);
    const [priceRange, setPriceRange] = useState({ min: 0, max: 100 });

    const categories = [...new Set(products.map((product) => product.category))];

    const filteredItems = products.filter((item) => {
        const categoryMatch = !selectedCategory || item?.category === selectedCategory;
        const searchMatch = !searchQuery || item?.title.toLowerCase().includes(searchQuery?.toLowerCase());
        const priceMatch = item?.price >= priceRange.min && item?.price <= priceRange.max;
        return categoryMatch && searchMatch && priceMatch;
    });

    const renderProductCards = () => {
        return filteredItems.map((product, index) => (
            <div key={index} className="primary_card">
                <Link to={`/productdetails/${product?.id}`}>
                    <img src={product?.image} alt="" className="primary_img" />
                </Link>
                <div className="primary_card_body">
                    <h3 className="card_title">{product?.title}</h3>
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
                    <button
                        onClick={() => dispatch({ type: 'ADD_ITEM', payload: product })}
                        className="add_to_cart card-btn"
                    >
                        Add to cart
                        <span className="circle">
                            <FontAwesomeIcon icon={faPlus} />
                        </span>
                    </button>
                </div>
            </div>
        ));
    };

    return (
        <section className="feature_products">
            <div className="container">
                <div className="feature_product_wrapper">
                    <div className="product_shorting lg:h-screen sticky top-0">
                        <h2 className="categories_title">Categories</h2>
                        <ul className="categories_items">
                            <li className="categories_item text-black dark:text-white">
                                <button className="categories_link cursor text-black dark:text-white" onClick={() => setSelectedCategory(null)}>All</button>
                            </li>
                            {categories.map((category) => (
                                <li key={category} className="categories_item text-black dark:text-white">
                                    <button className="categories_link cursor text-black dark:text-white" onClick={() => setSelectedCategory(category)}>{category}</button>
                                </li>
                            ))}
                        </ul>
                        <h2 className="filter_price_title">Price</h2>
                        <div className="price_filter">
                            <input 
                             onChange={(e) => setPriceRange({ ...priceRange, min: e.target.value })}
                            type="text" 
                            placeholder="0" className="input input-bordered w-full max-w-xs price_input" />
                            <h4 className="to_divider">To</h4>
                            <input 
                            onChange={(e) => setPriceRange({ ...priceRange, max: e.target.value })} 
                            type="text" 
                            placeholder="100" 
                            className="input input-bordered w-full max-w-xs price_input" />
                            <button
                            onClick={() => {
                                setPriceRange({
                                    min: parseFloat(priceRange.min),
                                    max: parseFloat(priceRange.max)
                                });
                            }}
                            className="btn">go</button>
                        </div>
                    </div>
                    <div className="feture_card_wrapper">
                        {renderProductCards()}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FeatureProduts