import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import sliderImg1 from "../../img/slider-1.png";
import sliderImg2 from "../../img/slider-2.png";
import sliderImg3 from "../../img/slider-3.png";
import sliderImg4 from "../../img/slider-4.png";
import "swiper/css";
import "./Slider.scss";

const Slider = () => {
  return (
    <Swiper slidesPerView={3} grabCursor={true} className="mySwiper">
      <SwiperSlide>
        <img src={sliderImg1} alt="slider image 1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={sliderImg2} alt="slider image 2" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={sliderImg3} alt="slider image 3" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={sliderImg4} alt="slider image 4" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
