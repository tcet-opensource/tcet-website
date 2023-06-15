import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, FreeMode, Grid } from "swiper";


import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/free-mode";

const PBodies = () => {
  const slideObj1 = [
    {
      bodiesImg: "img1.svg",
      bodiesName: "Name of Professional Body",
      link: "https://github.com/tcet-opensource",
    },
    {
      bodiesImg: "img2.svg",
      bodiesName: "Name of Professional Body",
      link: "https://github.com/tcet-opensource",
    },
    {
      bodiesImg: "img3.svg",
      bodiesName: "Name of Professional Body",
      link: "https://github.com/tcet-opensource",
    },
    {
      bodiesImg: "img4.svg",
      bodiesName: "Name of Professional Body",
      link: "https://github.com/tcet-opensource",
    },
    {
      bodiesImg: "img5.svg",
      bodiesName: "Name of Professional Body",
      link: "https://github.com/tcet-opensource",
    },
    {
      bodiesImg: "img6.svg",
      bodiesName: "Name of Professional Body",
      link: "https://github.com/tcet-opensource",
    },
    {
      bodiesImg: "img1.svg",
      bodiesName: "Name of Professional Bodies7",
      link: "https://github.com/tcet-opensource",
    },
    {
      bodiesImg: "img2.svg",
      bodiesName: "Name of Professional Bodies8",
      link: "https://github.com/tcet-opensource",
    },
  ];


  const mappedSlides1 = slideObj1.map((data) => {
    return (
      <SwiperSlide key={data.bodiesName} className="">
        <div className="p-2">
          <div className="h-full flex items-center border-gray-200 border p-1 rounded-lg bg-[#F6F7F9]">

            <div className="">
              <a href={data.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={`/HomePage/bodies/${data.bodiesImg}`}
                  alt={data.bodiesName}
                  className="w-12 h-12  bg-gray-100 object-cover object-center flex-shrink rounded-full m-1 mr-2 ml-1"
                />
              </a>
            </div>

            <div className="flex-grow">
              <a href={data.link} target="_blank" rel="noopener noreferrer">
                <div className="ml-2 md:ml-0 text-gray-900 font-inter md:text-lg text-base">{data.bodiesName}</div>
              </a>
            </div>

          </div>

        </div>
      </SwiperSlide>
    );
  });


  return (
    <div>
      <Swiper
        grid={{ rows: 2, fill: 'row' }}
        className="w-full mb-6"
        // install Swiper modules
        modules={[Navigation, FreeMode, A11y, Grid]}
        freeMode={true}
        spaceBetween={10}
        slidesPerView={1}
        breakpoints={{
          420: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 30
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 3,
          },
        }}
        navigation={{
          prevEl: ".swiper-prev",
          nextEl: ".swiper-next",
          disabledClass: "swiper-button-disabled",
        }}
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log("slide change")}
      >
        {mappedSlides1}
        {/* {mappedSlides2} */}

        <div className="swiper-prev flex items-center justify-center shadow-md shadow-[0px 4px 8px -2px rgba(16, 24, 40, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.06);] absolute z-10 top-1/2 left-2  transform -translate-y-1/2 bg-white w-8 h-8 rounded-full">
          <img src="/misc/chevron-left.svg" alt="prev-image-btn" />
        </div>
        <div className="swiper-next flex items-center justify-center shadow-md shadow-[0px 4px 8px -2px rgba(16, 24, 40, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.06);] absolute z-10 top-1/2 right-2 transform -translate-y-1/2 bg-white w-8 h-8 rounded-full">
          <img src="/misc/chevron-right.svg" alt="next-image-btn" />
        </div>
      </Swiper>

    </div>
  );
};

export default PBodies;