// // import { register } from 'swiper/element/bundle';
// // register();
// // import React, { useEffect } from 'react';
// // import { Swiper, SwiperSlide } from "swiper/react";
// // import { Autoplay } from "swiper";
// // import 'swiper/swiper-bundle.min.css';
// // import "swiper/css";

// const data = [
//     "IMC - Ramkrishna Bajaj National Quality Commendation Certification 2012 (Education) followed by IMC - Ramkrishna Bajaj National Quality Award 2015 (Education)",
//     "In July 2016 TCET has been selected for Asia Pacific Quality Award (APQA) for best in class award in education category from Global Pacific Quality Award (GPQA)",
//     `"Excellent Performing & Innovative Engineering Institute in Maharashtra" at National Maharashtra Education Summit & Awards 2016`,
//     "Member of National Entrepreneurship Network (NEN) and Confederation of Indian Industry (CII), felicitated by CII-Education Excellence Forum for enhancing Industry Connect, Employability and Faculty Competency.",
//     "IMC - Ramkrishna Bajaj National Quality Commendation Certification 2012 (Education) followed by IMC - Ramkrishna Bajaj National Quality Award 2015 (Education)",
//     "In July 2016 TCET has been selected for Asia Pacific Quality Award (APQA) for best in class award in education category from Global Pacific Quality Award (GPQA)",
//     `"Excellent Performing & Innovative Engineering Institute in Maharashtra" at National Maharashtra Education Summit & Awards 2016`,
//     "Member of National Entrepreneurship Network (NEN) and Confederation of Indian Industry (CII), felicitated by CII-Education Excellence Forum for enhancing Industry Connect, Employability and Faculty Competency."    
// ];

// // export default function AchievementSwiper() {
// //   return (
// //     <Swiper
// //       mousewheel-force-to-axis={true}
// //       className="relative h-auto w-full "
// //       slidesPerView={4}
// //       spaceBetween={30}
// //     >
// //       {data.map((d) => (
// //         <SwiperSlide key={d} className="relative h-full w-1/2 lg:w-1/4 p-2">
// //             <p>{d}</p>
// //         </SwiperSlide>
// //       ))}
// //     </Swiper>
// //   );
// // }

// import React, { useRef, useState } from "react";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";


// // import required modules
// import { Autoplay, Pagination, Navigation } from "swiper";

// export default function AchievementSwiper() {
//   return (
//     <>
//       <Swiper
//         slidesPerView={4}
//         spaceBetween={30}
//         centeredSlides={true}
//         autoplay={{
//           delay: 2500,
//           disableOnInteraction: false,
//         }}
//         pagination={{
//           clickable: true,
//         }}
//         navigation={true}
//         modules={[Autoplay, Pagination, Navigation]}
//         className="mySwiper"
//       >
//       {data.map((d) => (
//           <SwiperSlide key={d} className="relative h-full w-1/2 lg:w-1/4 p-2">
//               <p>{d}</p>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </>
//   );
// }

import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";

const data = [
  {text: "IMC - Ramkrishna Bajaj National Quality Commendation Certification 2012 (Education) followed by IMC - Ramkrishna Bajaj National Quality Award 2015 (Education)"},
  {text: "In July 2016 TCET has been selected for Asia Pacific Quality Award (APQA) for best in class award in education category from Global Pacific Quality Award (GPQA)"},
  {text: `"Excellent Performing & Innovative Engineering Institute in Maharashtra" at National Maharashtra Education Summit & Awards 2016`},
  {text: "Member of National Entrepreneurship Network (NEN) and Confederation of Indian Industry (CII), felicitated by CII-Education Excellence Forum for enhancing Industry Connect, Employability and Faculty Competency."},
  {text: "IMC - Ramkrishna Bajaj National Quality Commendation Certification 2012 (Education) followed by IMC - Ramkrishna Bajaj National Quality Award 2015 (Education)"},
  {text: "IMC - Ramkrishna Bajaj National Quality Commendation Certification 2012 (Education) followed by IMC - Ramkrishna Bajaj National Quality Award 2015 (Education)"},
  {text: "In July 2016 TCET has been selected for Asia Pacific Quality Award (APQA) for best in class award in education category from Global Pacific Quality Award (GPQA)"},
  {text: `"Excellent Performing & Innovative Engineering Institute in Maharashtra" at National Maharashtra Education Summit & Awards 2016`},
  {text: "Member of National Entrepreneurship Network (NEN) and Confederation of Indian Industry (CII), felicitated by CII-Education Excellence Forum for enhancing Industry Connect, Employability and Faculty Competency."}
];

export default function AchievementSwiper() {
  return (
    <Swiper
      className="relative h-auto w-full "
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
        <SwiperSlide key={d.text} className="relative h-full w-1/2 lg:w-1/4 p-2">
          <p>{d.text}</p>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
