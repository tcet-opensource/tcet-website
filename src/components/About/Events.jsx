import { useState } from "react"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Autoplay } from "swiper"

import "swiper/css";
import "swiper/css/navigation";

export default function Events() {
    const [events, setEvents] = useState([
        {
            "eventId": 1,
            "eventImg": "Events.png",
            "eventTitle": "Zephyr 2023",
            "description": "Massa elementum mi sed magnis orci tristique turpis. Quam at vitae in scelerisque volutpat fringilla eget sollicitudin rhoncus. Dignissim sit odio felis tortor imperdiet eu velit. Bibendum bibendum vitae pellentesque ultricies porttitor."
        },
        {
            "eventId": 2,
            "eventImg": "Events.png",
            "eventTitle": "Zephyr 2023",
            "description": "Massa elementum mi sed magnis orci tristique turpis. Quam at vitae in scelerisque volutpat fringilla eget sollicitudin rhoncus. Dignissim sit odio felis tortor imperdiet eu velit. Bibendum bibendum vitae pellentesque ultricies porttitor."
        },
        {
            "eventId": 3,
            "eventImg": "Events.png",
            "eventTitle": "Zephyr 2023",
            "description": "Massa elementum mi sed magnis orci tristique turpis. Quam at vitae in scelerisque volutpat fringilla eget sollicitudin rhoncus. Dignissim sit odio felis tortor imperdiet eu velit. Bibendum bibendum vitae pellentesque ultricies porttitor."
        },
    ])

    return (
        <Swiper
            className="lg:col-span-5 relative h-auto sm:h-72 md:h-80 lg:h-72 w-full rounded-lg"
            slidesPerView={1}
            centeredSlides={true}
            spaceBetween={30}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            navigation={{
                prevEl: ".swiper-prev",
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
                            src={`/Images/About/${Event.eventImg}`} alt="Events" 
                            className="object-cover object-center w-full"
                        />

                        <div className="absolute top-0 -left-1 pl-5 h-full w-2/3 flex flex-col bg-gradient-to-r justify-center from-white from-80%">
                            <span className="text-4xl font-semibold">{Event.eventTitle}</span>
                            <span className="w-4/5 text-sm">Massa elementum mi sed magnis orci tristique turpis. Quam at vitae in scelerisque volutpat fringilla eget sollicitudin rhoncus. Dignissim sit odio felis tortor imperdiet eu velit. Bibendum bibendum vitae pellentesque ultricies porttitor.</span>
                        </div>
                    </SwiperSlide>
                ))
            }
            <div className="swiper-next flex items-center justify-center shadow-md shadow-[0px 4px 8px -2px rgba(16, 24, 40, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.06);] absolute z-10 top-1/2 right-2 transform -translate-y-1/2 bg-white w-8 h-8 rounded-full">
                <img src="/misc/chevron-right.svg" alt="next-image-btn" />
            </div>
        </Swiper>
    )
}