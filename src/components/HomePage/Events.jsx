import { useState } from "react"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Autoplay } from "swiper"

import "swiper/css";
import "swiper/css/navigation";

export default function Events() {
    const [events, setEvents] = useState([
        {
            "eventId": 1,
            "eventImg": "multicon.jpg",
            "eventTitle": "Multicon 2023",
            "description": `
MULTICON-W is an initiative of Thakur College of
Engineering and Technology (TCET). This platform is created with the objective of inculcating the Research
culture in the Higher and Technical Educational Institutes, where UG and PG programs are evaluated by the
accrediting bodies like NBA and NAAC in which research contribution is the major parameter to evaluate the
R&D activities
            `
        },
        {
            "eventId": 2,
            "eventImg": "zephyr.jpg",
            "eventTitle": "Zephyr 2023",
            "description": "Technical Festival was organized to enhance the technical skills as well as managerial skill which will enhance the overall skill of the student through various platforms with the keen vision that further it would help in the augmentation of name, fame, and growth of the institute."
        },
        {
            "eventId": 3,
            "eventImg": "sojourn.jpg",
            "eventTitle": "Sojourn 2023",
            "description": "The annual cultural festival Sojourn is one of the most awaited events at the college campus. Sojourn is a thoroughfare along which the engineering students are able to unveil their talent on the much isolated turf of performing arts. This is an event where students take a brief time off their busy schedule and strive hard to acclaim proficiency in the field of performing arts."
        },
    ])

    return (
        <Swiper
            className="lg:col-span-6 relative h-auto sm:h-72 md:h-80 lg:h-72 w-full rounded-lg"
            slidesPerView={1}
            centeredSlides={true}
            spaceBetween={30}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            navigation={{
                // prevEl: ".swiper-prev",
                nextEl: ".swiper-next",
                disabledClass: "swiper-button-disabled",
            }}
            loop={true}
            modules={[Navigation, Autoplay]}
        >
            {
                events.map(Event => (
                    <SwiperSlide key={Event.eventId} className="relative h-full w-full flex justify-center items-center">
                        <img 
                            src={`/HomePage/Events/${Event.eventImg}`} alt="Events" 
                            className="object-cover object-center w-full"
                        />

                        <div className="absolute top-0 -left-1 pl-5 h-full w-2/3 flex flex-col bg-gradient-to-r justify-center from-[#ffffffE6] from-80%">
                            <span className="text-4xl text-gray-900 font-semibold">{Event.eventTitle}</span>
                            <span className="w-4/5 text-sm text-gray-700">{Event.description}</span>
                        </div>
                    </SwiperSlide>
                ))
            }
            <div className="swiper-next flex items-center justify-center shadow-md shadow-[0px 4px 8px -2px rgba(16, 24, 40, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.06);] absolute z-10 top-1/2 right-2 transform -translate-y-1/2 bg-white w-8 h-8 rounded-full cursor-pointer">
                <img src="/misc/chevron-right.svg" alt="next-image-btn" />
            </div>
        </Swiper>
    )
}