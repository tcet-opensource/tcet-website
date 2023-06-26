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
    <Swiper
      navigation={{
        prevEl: ".swiper-prev",
        nextEl: ".swiper-next",
      }}
      modules={[Navigation]}
      className="mySwiper"
      breakpoints={{
        420: {
          slidesPerView: 2,
        },
        640: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 4,
        },
        1024: {
          slidesPerView: 4,
        },
        1280: {
          slidesPerView: 4,
        },
      }}
    >
      {data.map((d, i) => (
        <SwiperSlide key={i} className="relative p-2 px-2 w-full text-center">
          <p>{d.text}</p>
        </SwiperSlide>
      ))}
      <div className="swiper-prev m--5 flex items-center justify-center shadow-md shadow-[0px 4px 8px -2px rgba(16, 24, 40, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.06);] absolute z-10 top-1/2 left-2 transform -translate-y-1/2 bg-white w-8 h-8 rounded-full">
          <img src="/misc/chevron-left.svg" alt="prev-image-btn" />
          {/* {`<` font-bold text-2xl text-sky-700} */}
      </div>
      <div className="swiper-next flex items-center justify-center shadow-md shadow-[0px 4px 8px -2px rgba(16, 24, 40, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.06);] absolute z-10 top-1/2 right-2 transform -translate-y-1/2 bg-white w-8 h-8 rounded-full">
          <img src="/misc/chevron-right.svg" alt="next-image-btn" />
      </div>
    </Swiper>
  );
}