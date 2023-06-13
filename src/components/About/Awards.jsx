import { useState } from "react"

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper"
import "swiper/css"

export default function Awards() {
    const [awards, setAwards] = useState([
        {
            awardId: 1,
            awardImg: "Awards.jpg",
            caption: `Massa elementum mi sed magnis orci tristique turpis. Quam at vitae
                in scelerisque volutpat fringilla eget sollicitudin rhoncus.`,
        },
        {
            awardId: 2,
            awardImg: "Awards.jpg",
            caption: `Massa elementum mi sed magnis orci tristique turpis. Quam at vitae
                in scelerisque volutpat fringilla eget sollicitudin rhoncus.`,
        },
        {
            awardId: 3,
            awardImg: "Awards.jpg",
            caption: `Massa elementum mi sed magnis orci tristique turpis. Quam at vitae
                in scelerisque volutpat fringilla eget sollicitudin rhoncus.`,
        },
        {
            awardId: 4,
            awardImg: "Awards.jpg",
            caption: `Massa elementum mi sed magnis orci tristique turpis. Quam at vitae
                in scelerisque volutpat fringilla eget sollicitudin rhoncus.`,
        },
    ])

    return (
        <Swiper
            className="lg:col-span-3 relative h-auto sm:h-72 md:h-80 lg:h-72 w-full rounded-lg"
            slidesPerView={1}
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            loop={true}
            modules={[Autoplay]}
        >
            {
                awards.map(award => (
                    <SwiperSlide key={award.awardId} className="relative h-full w-full">
                        <img 
                            src={`/Images/About/${award.awardImg}`} 
                            className="object-cover object-center h-full w-full"
                        />

                        <div className="absolute top-1/2 h-max w-2/3 ml-5 mt-5 flex flex-col space-y-2">
                            <span className="w-max bg-white font-semibold px-2 rounded-full">Student Achievements</span>
                            <span className="text-white font-semibold text-base md:text-sm lg:text-base">{award.caption}</span>
                        </div>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    )
}