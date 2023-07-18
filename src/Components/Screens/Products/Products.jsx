import 'react';
import { faPlus, faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Products.css';
import product1 from '../../../assets/products/img.png';

function Products() {
    return (
        <section className="product">
            <div className="container">
                <div className="card_warpper">
                <div className="primary_card">
                    <img src={product1} alt="" />
                    <div className="primary_card_body">
                        <h3 className="card_title">The school of life - emotional baggage tote.
                        </h3>
                        <div className="rating">
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStarHalf} />
                        </div>
                        <h6 className="strikeout flex-none">$40</h6>
                        <h4 className="price">$20</h4>
                        <button className="add_to_cart card-btn">
                            Add to cart
                            <span className="circle"><FontAwesomeIcon icon={faPlus} /></span>
                        </button>
                    </div>
                </div>
                <div className="primary_card">
                    <img src={product1} alt="" />
                    <div className="primary_card_body">
                        <h3 className="card_title">The school of life - emotional baggage tote.
                        </h3>
                        <div className="rating">
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStarHalf} />
                        </div>
                        <h6 className="strikeout flex-none">$40</h6>
                        <h4 className="price">$20</h4>
                        <button className="add_to_cart card-btn">
                            Add to cart
                            <span className="circle"><FontAwesomeIcon icon={faPlus} /></span>
                        </button>
                    </div>
                </div>
                <div className="primary_card">
                    <img src={product1} alt="" />
                    <div className="primary_card_body">
                        <h3 className="card_title">The school of life - emotional baggage tote.
                        </h3>
                        <div className="rating">
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStarHalf} />
                        </div>
                        <h6 className="strikeout flex-none">$40</h6>
                        <h4 className="price">$20</h4>
                        <button className="add_to_cart card-btn">
                            Add to cart
                            <span className="circle"><FontAwesomeIcon icon={faPlus} /></span>
                        </button>
                    </div>
                </div>
                <div className="primary_card">
                    <img src={product1} alt="" />
                    <div className="primary_card_body">
                        <h3 className="card_title">The school of life - emotional baggage tote.
                        </h3>
                        <div className="rating">
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStarHalf} />
                        </div>
                        <h6 className="strikeout flex-none">$40</h6>
                        <h4 className="price">$20</h4>
                        <button className="add_to_cart card-btn">
                            Add to cart
                            <span className="circle"><FontAwesomeIcon icon={faPlus} /></span>
                        </button>
                    </div>
                </div>
                <div className="primary_card">
                    <img src={product1} alt="" />
                    <div className="primary_card_body">
                        <h3 className="card_title">The school of life - emotional baggage tote.
                        </h3>
                        <div className="rating">
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStarHalf} />
                        </div>
                        <h6 className="strikeout flex-none">$40</h6>
                        <h4 className="price">$20</h4>
                        <button className="add_to_cart card-btn">
                            Add to cart
                            <span className="circle"><FontAwesomeIcon icon={faPlus} /></span>
                        </button>
                    </div>
                </div>
                <div className="primary_card">
                    <img src={product1} alt="" />
                    <div className="primary_card_body">
                        <h3 className="card_title">The school of life - emotional baggage tote.
                        </h3>
                        <div className="rating">
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStarHalf} />
                        </div>
                        <h6 className="strikeout flex-none">$40</h6>
                        <h4 className="price">$20</h4>
                        <button className="add_to_cart card-btn">
                            Add to cart
                            <span className="circle"><FontAwesomeIcon icon={faPlus} /></span>
                        </button>
                    </div>
                </div>
                </div>
                <button className="btn card_btn">view all</button>
            </div>
        </section>
    )
}

export default Products