import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import i1 from "../assets/img1.jpg";
import i2 from "../assets/img2.jpg";
import i3 from "../assets/img3.jpg";

const Slider = () => {
  return (
    <div>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <img className="w-full h-[900px] object-cover" src={i1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full h-[900px] object-cover" src={i2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full h-[900px] object-cover" src={i3} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
