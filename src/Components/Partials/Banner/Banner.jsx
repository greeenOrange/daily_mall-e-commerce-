import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './Banner.css'
import 'swiper/css';
import myImage from '../../../assets/banner-1.png'
console.log(myImage);
function Banner() {
    return (
        <section className="banner">
            <div className="container">
            <Swiper
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide><a href=""><img src={myImage} alt="banner" /></a></SwiperSlide>
            <SwiperSlide><a href=""><img src={myImage} alt="banner" /></a></SwiperSlide>
            <SwiperSlide><a href=""><img src={myImage} alt="banner" /></a></SwiperSlide>
        </Swiper>
            </div>
        </section>
    )
}

export default Banner