import 'react';
import './FlashDeals.css';
import sopha from '../../../../assets/sopha-1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';
import Counter from '../../../Partials/Counter/Counter';
function FlashDeals() {
    return (
        <section className="flash_deals">
            <div className="container">
                <div className="secondary_card_warpper">                
                <div className="seconday_card">
                    <div className="secondary_card_inner">
                        <span className="discount_tag">20%</span>
                        <img src={sopha} alt="sopha" />
                        <div className="card_dec">
                            <h3 className="card_title">The school of life - emotional baggage tote...</h3>
                            <div className="rating">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStarHalf} />
                                <span className="rating_in_text">1 Reviews</span>
                            </div>
                            <div className="secondary_card_footer">
                                <div className="card_left">
                                    <h6 className="strikeout flex-none">$30</h6>
                                    <h4 className="price">$20</h4>
                                </div>
                                <button className="add_to_cart card-btn">
                                    Add to cart
                                    <span className="circle"><FontAwesomeIcon icon={faPlus} /></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <Counter />
                <div className="seconday_card">
                    <div className="secondary_card_inner">
                        <img src={sopha} alt="sopha" />
                        <div className="card_dec">
                            <h3 className="card_title">The school of life - emotional baggage tote...</h3>
                            <div className="rating">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStarHalf} />
                                <span className="rating_in_text">1 Reviews</span>
                            </div>
                            <div className="secondary_card_footer">
                                <div className="card_left">
                                    <h6 className="strikeout flex-none">$30</h6>
                                    <h4 className="price">$20</h4>
                                </div>
                                <button className="add_to_cart card-btn">
                                    Add to cart
                                    <span className="circle"><FontAwesomeIcon icon={faPlus} /></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    )
}

export default FlashDeals