import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';
import product from '../../../assets/brans/shose-1.png';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';
import './ProductDetails.css'

const ProductDetails = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [counter, setCounter] = useState(1);
    const [ToggleState, setToggleState] = useState(1);
    const [warning, setWarning] = useState('')

    const toggleTab = (index) => {
        setToggleState(index);
    };

    const getActiveClass = (index, className) => ToggleState === index ? className : "";

    const increase = () => {
        setCounter(count => count + 1);
        setWarning("") 
    };

    const decrease = () => {
        if (counter <= 1) {
            setWarning("At least 1 counted")   
        }else if (counter >= 1){
            setCounter(count => count - 1);
            setWarning("") 
        }else{
            return ''
        }
    };
    return (
        <section className="product_details">
            <div className="container">
                <div className="product_details_wrapper">
                    <div className="product_left">
                        <Swiper
                            spaceBetween={10}
                            thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className="mySwiper2"
                        >
                            <SwiperSlide>
                                <img alt="" src={product} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img alt="" src={product} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img alt="" src={product} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img alt="" src={product} />
                            </SwiperSlide>
                        </Swiper>
                        <Swiper
                            onSwiper={setThumbsSwiper}
                            spaceBetween={10}
                            slidesPerView={4}
                            freeMode={true}
                            watchSlidesProgress={true}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className="mySwiper mt-4"
                        >
                            <SwiperSlide>
                                <img alt="" src={product} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img alt="" src={product} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img alt="" src={product} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img alt="" src={product} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img alt="" src={product} />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className="product_right">
                        <h2 className="details_title">Hot Selling Sneakers, Sneakers Casual
                            Shoes Men Fashion Sneakers Fly knit Li</h2>
                        <div className="details_rating rating">
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStarHalf} />
                            <span className="rating_in_text">3 Reviews</span>
                        </div>
                        <div className="details_price flex items-center gap-6">
                            <h6 className="details_strike strikeout">$30</h6>
                            <h4 className="details_price">$239.99</h4>
                        </div>
                        <p className="details_dec">Size our sofa slipcovers have 3 sizes. Chair slipcover measures up to 32in-47in wide (80-120cm), Loveseat slipcover measures up to 57in-70in wide (145-180cm), Sofia slipcover measures up to 72in-92in (185-235cm). PLEASE measure your sofa before choosing our sofa slipcovers.</p>
                        <div className="flex flex-col gap-5">
                            <h5 className="product_text">Availablity : <span className="stock">In stock</span></h5>
                            <h5 className="product_text">Product Code : <span>#1234</span></h5>
                            <h5 className="product_text">Tags : <span>Shoes, Man, Classic </span></h5>
                            <h5 className="product_text">Color: <span className="colors color_one"></span> <span className="colors color_two"></span> <span className="colors color_three"></span></h5>
                            <h5 className="product_text">size: <span></span> <span></span> <span></span></h5>
                            <div className="qunatity product_text">Quantity :
                                <div className="count_num">
                                    <span className="p-3">{counter}</span>
                                    <div className="count_btn">
                                        <button onClick={increase} className="plus">+</button>
                                        <button onClick={decrease} className="minus">-</button>
                                    </div>
                                    
                                </div>
                                <p style={{color: "red"}}>{warning}</p>
                            </div>
                        </div>
                        <div className="clear_section">
                            <h5 className="clear_text">Clear Selection</h5>
                            <div className="button_group">
                                <button className="buy_now">Buy Now</button>
                                <button className="add_to_cart_detailst">Add To Cart</button>
                                <button className="add_favourite"><FontAwesomeIcon icon={faHeart} /></button>
                            </div>
                        </div>

                    </div>

                </div>
                <div className="product_overview my-5">
                    <ul className="tab_list">
                        <li
                            className={`tabs ${getActiveClass(1, "active_tabs")}`}
                            onClick={() => toggleTab(1)}
                        >
                            Overview
                        </li>
                        <li
                            className={`tabs ${getActiveClass(2, "active_tabs")}`}
                            onClick={() => toggleTab(2)}
                        >
                            Reviews
                        </li>
                    </ul>
                    <div className="content-container">
                        <div className={`content ${getActiveClass(1, "active_content")}`}>
                            <p>85% Polyester and 15% Spandex Fabric

                                √【Size】our sofa slipcovers have 3 sizes. Chair slipcover measures up to 32in-47in wide (80-120cm), Loveseat slipcover measures up to 57in-70in wide (145-180cm), Sofia slipcover measures up to 72in-92in (185-235cm). PLEASE measure your sofa before choosing our sofa slipcovers.

                                √【Fabric】: Our Stretchable Sofa Slipcovers Which Are Made of 85% Polyester and 15% Spandex Fabric, Are Suitable for 90% Sofas.the Great Elasticity Could Fit Your Sofa More Perfect and Cover Sofa in Ever Edge. and Unique Dyeing Technolog Keeps Your Sofa Slipcovers Not Fade. Please Note : Our Sofa Slipcovers Are Not Water-proof.

                                √【Protection】Our sofa slipcovers could help protect your furniture from daily tear, spills, stains and so on. It is a great choice for family with children and pets. It's easy to install and take off, machine washable, and the best partner for household life.

                                √【Lifetime 】We are confident in our products’ quality. If you are unsatisfied with our products whichever aspects, please connect with us firstly, and we will give you a satisfying result, no matter refund or sending new slipcovers for replace. We will do our best.

                                √【Attention】Due to the different light and computer screen resolution, The color displayed on the screen may be different from the actual product. If you are not sure about the color or anything else, PLEASE contact US and we will assist you</p>
                        </div>
                        <div className={`content ${getActiveClass(2, "active_content")}`}>
                            <p>Product quality is really good. highly recommanded!</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductDetails