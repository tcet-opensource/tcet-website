import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";

const data = [
  { img: "about-slider-1.jpg", alt: "about 1" },
  { img: "about-slider-3.jpg", alt: "about 3" },
  { img: "about-slider-5.jpg", alt: "about 5" },
  { img: "L-1.jpg", alt: "Lab1" },
  { img: "L-2.jpg", alt: "Lab2" },
  { img: "L-3.jpg", alt: "Lab3" },
];

export default function AboutSwiper() {
  return (
    <Swiper
      className="lg:col-span-3 relative h-auto w-full "
      slidesPerView={1}
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: true,
      }}
      loop={true}
      modules={[Autoplay]}
    >
      {data.map((d) => (
        <SwiperSlide key={d.img} className="relative h-full w-full !my-auto">
          <img
            src={`/HomePage/About/${d.img}`}
            className="object-cover object-center h-full w-full "
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
