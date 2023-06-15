import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, FreeMode } from "swiper";


import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/free-mode";

const MagazineSection = () => {
  const slideObj = [
    {
      magazineImg: "QUASAR-23.jpg",
      magazineName : "Quasar | College Magazine",
      link : "https://online.pubhtml5.com/wrkl/fsai/#p=1",
    },
    {
      magazineImg: "magazine1.png",
      magazineName : "Elysian | SORT & Literary Club",
      link: "https://online.pubhtml5.com/pohdz/htxu/#p=1",
    },
    {
      magazineImg: "magazine2.png",
      magazineName : "Tejas | AIML Department",
      link : "https://online.pubhtml5.com/rylr/udki/#p=1  ",
    }, 
    {
      magazineImg: "magazine3.png",
      magazineName : "Guftagu | TSDW",
      link : "https://online.pubhtml5.com/utkaf/hnic/#p=1",
    },
    {
      magazineImg: "magazine4.png",
      magazineName : "Emaarat | Civil Department",
      link : "https://online.pubhtml5.com/csfxq/blon/#p=1",
    },
  ];

  const mappedSlides = slideObj.map((data) => {
    return (
      <SwiperSlide key={data.magazineName} className="border rounded-lg">
        <div className="box-content w-272 h-432 p-8 flex flex-col justify-between">
          <div className="space-y-2">
            <div className="min-w-full">
            <a href={data.link} target="_blank"rel="noopener noreferrer">
                <img
                  src={`/HomePage/MagazineSection/${data.magazineImg}`}
                  alt={data.magazineName}
                  className="max-h-90 w-80 mx-auto object-contain"
                />
              </a>
            </div>
          </div>
          <div className="bg-white  p-3 rounded-lg mb-2">
            <div className="text-sm md:text-base lg:text-md text-slate-600">{data.magazineName}</div>
          </div>
        </div>
      </SwiperSlide>
    );
  });

  return (
    <div>
      <Swiper
        className="w-full  mb-6"
        // install Swiper modules
        modules={[Navigation, FreeMode, A11y]}
        freeMode={true}
        spaceBetween={10}
        slidesPerView={1}
        breakpoints={{
          420: {
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 30
          },
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 4,
          },
          1280: {
            slidesPerView: 5,
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

export default MagazineSection;