// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper";


import Imagen1 from "../../img/Destination1.png"
import Imagen2 from "../../img/Destination2.png"
import Imagen3 from "../../img/Destination3.png"
import Imagen4 from "../../img/Destination4.png"
import Imagen5 from "../../img/Destination5.png"
import Imagen6 from "../../img/Destination6.png"

export default function Slider() {
  return (
    <>
    <p className="unico-parra">Popular MyItineraries</p>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src={Imagen1} alt="..." ></img></SwiperSlide>
        <SwiperSlide><img src={Imagen2} alt="..." ></img></SwiperSlide>
        <SwiperSlide><img src={Imagen3} alt="..." ></img></SwiperSlide>
        <SwiperSlide><img src={Imagen4} alt="..." ></img></SwiperSlide>
        <SwiperSlide><img src={Imagen5} alt="..." ></img></SwiperSlide>
        <SwiperSlide><img src={Imagen6} alt="..." ></img></SwiperSlide>
       
      </Swiper>
    </>
  );
}
