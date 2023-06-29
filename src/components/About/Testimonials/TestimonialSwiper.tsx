import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, FreeMode } from "swiper";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/free-mode";
import type React from "react";
import type { Testimony } from "./data.js";

const TestimonialSwiper: React.FC<{
  twoSlideAtLarge?: boolean;
  data: Testimony[];
}> = ({ twoSlideAtLarge = false, data }) => (

  <Swiper
    className="w-full mb-6 bg-slate-50"
    modules={[Navigation,  A11y, Pagination]}
    freeMode={true}
    spaceBetween={50}
    slidesPerView={1}
    breakpoints={{
      420: {
        slidesPerView: 1,
      },
      640: {
        slidesPerView: twoSlideAtLarge ? 2 : 1,
      },
    }}
    navigation={{
      prevEl: ".swiper-prev-corporate",
      nextEl: ".swiper-next-corporate",
      disabledClass: "swiper-button-disabled",
    }}
    pagination={{
      clickable: true,
    }}
  >
    {data.map((d) => (
      <SwiperSlide>
        <div key={d.testimony} className="mb-8">
          <div className="  bg-blue-gray-50 bg-opacity-40 rounded-lg p-5 pl-10 space-y-5">
            <p className="text-md md:text-md lg:text-xl text-slate-600">
              {d.testimony}
            </p>
            <div className="space-y-1" >
              <p className="font-medium">
                {d.author}
              </p>
              <p className=" text-sm text-gray-600">{d.company}</p>
            </div>
          </div>
        </div>
      </SwiperSlide>
    ))}
    <div className="swiper-prev-corporate flex items-center justify-center shadow-md shadow-[0px 4px 8px -2px rgba(16, 24, 40, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.06);] 
    absolute z-10 top-1/2 left-2 transform -translate-y-1/2  bg-white w-8 h-8 rounded-full">
      <img src="/misc/chevron-left.svg" alt="prev-image-btn" />
    </div>
    <div className="swiper-next-corporate flex items-center justify-center shadow-md shadow-[0px 4px 8px -2px rgba(16, 24, 40, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.06);] 
    absolute z-10 top-1/2 right-2 transform -translate-y-1/2 bg-white w-8 h-8 rounded-full">
      <img src="/misc/chevron-right.svg" alt="next-image-btn" />
    </div>
  </Swiper>
);

export default TestimonialSwiper;
