import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import './VarticalCarousel.css';
import 'swiper/css';
import { Autoplay, Pagination } from 'swiper/modules';
import sliderImage from '../../../assets/brans/holiday.png';

function VarticalCarousel() {

  return (
    <div className="extra_carousel">
      {/* <div className="container">
    <Swiper
    direction={'vertical'}
    pagination={{
      clickable: true,
    }}
    modules={[ Pagination]}
    className="mySwiper"
    >
      <SwiperSlide><img src={sliderImage} alt="" /></SwiperSlide>
      <SwiperSlide><img src={sliderImage} alt="" /></SwiperSlide>
      <SwiperSlide><img src={sliderImage} alt="" /></SwiperSlide>
      <SwiperSlide><img src={sliderImage} alt="" /></SwiperSlide>
    </Swiper>
    </div> */}

      <div className="container">
      <Swiper
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination]}
      className="mySwiper"
      >
      <SwiperSlide><img src={sliderImage} alt="" /></SwiperSlide>
      <SwiperSlide><img src={sliderImage} alt="" /></SwiperSlide>
      <SwiperSlide><img src={sliderImage} alt="" /></SwiperSlide>
      <SwiperSlide><img src={sliderImage} alt="" /></SwiperSlide>
      </Swiper>
      </div>
    </div>
  )
}

export default VarticalCarousel
