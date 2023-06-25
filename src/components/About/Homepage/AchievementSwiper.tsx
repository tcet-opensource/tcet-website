import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";

const data = [
  {text: "IMC - Ramkrishna Bajaj National Quality Commendation Certification 2012 (Education) followed by IMC - Ramkrishna Bajaj National Quality Award 2015 (Education)"},
  {text: "In July 2016 TCET has been selected for Asia Pacific Quality Award (APQA) for best in class award in education category from Global Pacific Quality Award (GPQA)"},
  {text: `"Excellent Performing & Innovative Engineering Institute in Maharashtra" at National Maharashtra Education Summit & Awards 2016`},
  {text: "Member of National Entrepreneurship Network (NEN) and Confederation of Indian Industry (CII), felicitated by CII-Education Excellence Forum for enhancing Industry Connect, Employability and Faculty Competency."}
];

export default function AchievementSwiper() {
  return (
    <Swiper
      className="relative w-full "
      slidesPerView={1}
      spaceBetween={10}
      centeredSlides={false}
      autoplay={{
        delay: 3500,
        disableOnInteraction: true,
      }}
      loop={true}
      modules={[Autoplay]}
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
        <SwiperSlide key={i} className="relative p-2 w-full">
          <p>{d.text}</p>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
