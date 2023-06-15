import { useState } from "react"

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper"
import "swiper/css"

export default function Awards() {
    const [awards, setAwards] = useState([
        {
            awardId: 1,
            awardImg: "about-slider-4.jpg",
            caption: `Falicitation of Riya Vishwakarma for being placed in Amazon with 40.00CTC package.`,
        },
        {
            awardId: 2,
            awardImg: "about-slider-2.jpg",
            caption: `Our proud students taking part in science exhibition.`,
        },
        {
            awardId: 3,
            awardImg: "about-slider-3.jpg",
            caption: `Congratulating all our students placed with high packages.`,
        },
    ])

    return (
        <Swiper
            className="lg:col-span-4 relative h-auto sm:h-72 md:h-80 lg:h-72 w-full rounded-lg"
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
                            src={`/HomePage/Awards/${award.awardImg}`} 
                            className="object-cover object-center h-full w-full"
                        />

                        <div className="absolute top-1/2 h-max w-2/3 ml-5 mt-5 flex flex-col space-y-2">
                            <span className="w-max bg-white text-gray-700 font-semibold px-2 rounded-full">Student Achievements</span>
                            <span className="text-white font-semibold text-base lg:text-sm xl:text-base">{award.caption}</span>
                        </div>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    )
}