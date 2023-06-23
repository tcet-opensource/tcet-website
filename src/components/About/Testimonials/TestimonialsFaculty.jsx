import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, FreeMode } from "swiper";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/free-mode";

const TestimonialsFaculty = () => {
    const slideObjFaculty = [
        {
            testimony : "Through its support & valuable contributions, the incubation centre has helped us sustain & grow our business over past year. We would like to thank Dr. Kamal Shah & Dr. Deven Shah for their guidance. Also, we would like to thank Maithlee Madam, Ashish Sir, Bhupesh & Manish for their support & effort on running Incubation Centre Smoothly On daily Basis.",
            author : "Hemant P. Kasturiwale",
            company : "Associate Professor -ETRX",
        },
        {
            testimony : "Through its support & valuable contributions, the incubation centre has helped us sustain & grow our business over past year. We would like to thank Dr. Kamal Shah & Dr. Deven Shah for their guidance. Also, we would like to thank Maithlee Madam, Ashish Sir, Bhupesh & Manish for their support & effort on running Incubation Centre Smoothly On daily Basis.",
            author : "Hemant P. Kasturiwale",
            company : "Associate Professor -ETRX",
        },
        {
            testimony : "Through its support & valuable contributions, the incubation centre has helped us sustain & grow our business over past year. We would like to thank Dr. Kamal Shah & Dr. Deven Shah for their guidance. Also, we would like to thank Maithlee Madam, Ashish Sir, Bhupesh & Manish for their support & effort on running Incubation Centre Smoothly On daily Basis.",
            author : "Hemant P. Kasturiwale",
            company : "Associate Professor -ETRX",
        },
        {
            testimony : "Through its support & valuable contributions, the incubation centre has helped us sustain & grow our business over past year. We would like to thank Dr. Kamal Shah & Dr. Deven Shah for their guidance. Also, we would like to thank Maithlee Madam, Ashish Sir, Bhupesh & Manish for their support & effort on running Incubation Centre Smoothly On daily Basis.",
            author : "Hemant P. Kasturiwale",
            company : "Associate Professor -ETRX",
        },
    ];
  
    
    const mappedSlides = slideObjFaculty.map((data) => {
      return (
        <SwiperSlide key={data.testimony}>
        <div class="p-5">
          <div class="mb-6 mt-2 bg-blue-gray-50 rounded-lg p-5">
            <div class="text-md md:text-md lg:text-xl text-slate-600 p-3">
              {data.testimony}
            </div>
            <div class="flex flex-col text-md md:text-md mt-6 ml-3 fomt-medium">
              {data.author}
            </div>
            <div class="ml-3 text-sm text-gray-600">{data.company}</div>
          </div>
          </div>
      </SwiperSlide>
      );
    });
  
    return (
      <div>
      <div class="flex flex-col px-5 gap-4">
        <div class="flex flex-start px-2 py-3 font-inter font-semibold text-md sm-text-md lg:text-xl text-orange-600 border rounded-md bg-orange-50">FACULTY</div>
      </div>
        <Swiper
          className="w-full  mb-6"
          // install Swiper modules
          modules={[Navigation, FreeMode, A11y, Pagination]}
          freeMode={true}
          spaceBetween={0}
          slidesPerView={1}
          breakpoints={{
            420: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 1,
            },
            1280: {
              slidesPerView: 1,
            },
          }}
          navigation={{
            prevEl: ".swiper-prev",
            nextEl: ".swiper-next",
            disabledClass: "swiper-button-disabled",
          }}
          pagination={{
            clickable: true,
          }}
        >
            
          {mappedSlides}
          <div className="swiper-prev flex items-center justify-center shadow-md shadow-[0px 4px 8px -2px rgba(16, 24, 40, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.06);] absolute z-10 top-1/2 left-2 transform -translate-y-1/2 bg-white w-8 h-8 rounded-full">
            <img src="/misc/chevron-left.svg" alt="prev-image-btn" />
          </div>
          <div className="swiper-next flex items-center justify-center shadow-md shadow-[0px 4px 8px -2px rgba(16, 24, 40, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.06);] absolute z-10 top-1/2 right-2 transform -translate-y-1/2 bg-white w-8 h-8 rounded-full">
            <img src="/misc/chevron-right.svg" alt="next-image-btn" />
          </div>
        </Swiper>
      </div>
    );
  };
  
  export default TestimonialsFaculty;