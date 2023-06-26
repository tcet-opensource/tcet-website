import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

const data = [
  {text: "IMC - Ramkrishna Bajaj National Quality Commendation Certification 2012 (Education) followed by IMC - Ramkrishna Bajaj National Quality Award 2015 (Education)"},
  {text: "In July 2016 TCET has been selected for Asia Pacific Quality Award (APQA) for best in class award in education category from Global Pacific Quality Award (GPQA)"},
  {text: `"Excellent Performing & Innovative Engineering Institute in Maharashtra" at National Maharashtra Education Summit & Awards 2016`},
  {text: "Member of National Entrepreneurship Network (NEN) and Confederation of Indian Industry (CII), felicitated by CII-Education Excellence Forum for enhancing Industry Connect, Employability and Faculty Competency."}
];

export default function AchievementSwiper() {
  return (
    <div className="relative p-5 md:p-4">
      <Swiper
      navigation={{
        prevEl: ".swiper-prev",
        nextEl: ".swiper-next",
      }}
      modules={[Navigation]}
      className="mySwiper w-full"
      spaceBetween={10}
      breakpoints={{
        420: {
          slidesPerView: 2,
        },
        640: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 3,
        },
        1280: {
          slidesPerView: 4,
        },
      }}
    >
      <div>
      {data.map((d, i) => (
        <SwiperSlide key={i} className="relative p-5 w-full text-center justify-between"> 
          <p >{d.text}</p>
        </SwiperSlide>
      ))}
      </div>
      
    </Swiper>
    <div className="swiper-prev flex items-center justify-center shadow-md shadow-[0px 4px 8px -2px rgba(16, 24, 40, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.06);] absolute left-2 bg-white z-10 top-1/2 w-8 h-8 rounded-full">
    <img src="/misc/chevron-left.svg" alt="prev-image-btn" />
    </div>
    <div className="swiper-next absolute flex items-center justify-center shadw-md shadow-[0px 4px 8px -2px rgba(16, 24, 40, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.06);] absolute right-2 bg-white z-10 top-1/2 w-8 h-8 rounded-full">
        <img src="/misc/chevron-right.svg" alt="next-image-btn" />
    </div>
    </div>
  );
}