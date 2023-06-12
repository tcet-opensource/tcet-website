import React, {useRef } from 'react';
import PlayIcon from '@material-ui/icons/PlayArrow';
import { ArrowBack } from '@material-ui/icons';
import SwiperCore, { EffectCoverflow, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

SwiperCore.use([EffectCoverflow]);

const slide_img = [
  {
    text:"Academic + Fun + Wellness = Life@TCET",
    img: "/HomePage/slider-1.jpg"
  },
  {
    text:"Academic + Fun + Wellness = Life@TCET",
    img: "/HomePage/slider-2.jpg"
  },
  {
    text:"Academic + Fun + Wellness = Life@TCET",
    img: "/HomePage/slider-3.jpg"
  },
  {
    text:"Academic + Fun + Wellness = Life@TCET",
    img: "/HomePage/slider-4.jpg"
  },
  {
    text:"Academic + Fun + Wellness = Life@TCET",
    img: "/HomePage/slider-5.jpg"
  },
  {
    text:"Academic + Fun + Wellness = Life@TCET",
    img: "/HomePage/slider-6.jpg"
  },
  {
    text:"Academic + Fun + Wellness = Life@TCET",
    img: "/HomePage/slider-7.jpg"
  }
];



const App = () => {

    const iframeRef = useRef(null);

    const handleDialogClose = () => {
      const iframe = iframeRef.current;
      iframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
      iframe.src = '';
      favDialog.close();
    };

    const handleClick = () => {
      const iframe = iframeRef.current;
      
        iframe.src="https://www.youtube.com/embed/bZiC538_JU8"
        
        favDialog.showModal()
    }

    SwiperCore.use([Autoplay])
  return (
    <> 
      <div className="relative">
        <div className="absolute top-4 left-4 lg:top-auto lg:left-auto lg:bottom-4 lg:right-4 z-10">
          <button className="px-4 py-2 bg-white rounded-3xl text-sm text-black" onClick={handleClick}>
            <PlayIcon style={{ color: 'white', backgroundColor: 'black', borderRadius: '50%', marginRight: '15px' }} />
            Play the Tour
          </button>
        </div>
        <Swiper
          centeredSlides={true}
          slidesPerView={"auto"}
          spaceBetween={40}
          coverflowEffect={{
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          loop={true}
          autoplay={{ delay: 2000 }}
          speed={1000}
          className="mySwiper"
        >
          {slide_img.map((el, i) => {
            return (
              <SwiperSlide key={i}>
                <div className="relative w-full md:w-full lg:w-full h-96">
                  <img src={el.img} alt="" className="w-full h-full object-cover rounded-md" />
                  <div className="absolute bottom-7 left-4 w-full md:w-[500px] lg:w-[700px]">
                    <h1 className="text-6xl text-white bg-black bg-opacity-5 font-title">
                      {el.text}
                    </h1>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

        <dialog id="favDialog" className='w-[1000px] rounded-md bg-black bg-opacity-50'>
          <div className="relative w-full md:w-full lg:w-full h-96">
            <iframe id="videoId"  className='rounded-md'
                      width="100%"
                      height="100%" 
                      src="https://www.youtube.com/embed/bZiC538_JU8" 
                      title="YouTube video player" 
                      frameborder="0" 
                      allowfullscreen
                      ref={iframeRef}>        
            </iframe>

            <button className='absolute px-4 py-2 bg-white rounded-3xl text-sm text-black flex' style={{ top: '10px', right: '10px' }} onClick={handleDialogClose}>
            <ArrowBack onClick={handleDialogClose} style={{ color: 'white', backgroundColor: 'black', borderRadius: '50%', marginRight: '5px' }}/>
            <span>Back to Slides</span>
          </button> 
          </div>
        </dialog>

    </>
  );
};

export default App;