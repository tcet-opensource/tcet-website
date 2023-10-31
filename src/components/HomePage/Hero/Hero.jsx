import React, { useRef, useEffect, useState } from 'react';
import SwiperCore, { EffectCoverflow, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

SwiperCore.use([EffectCoverflow]);

const slide_img = [
  '/HomePage/Hero/slider-1.jpg',
  '/HomePage/Hero/slider-2.jpg',
  '/HomePage/Hero/slider-3.jpg',
  '/HomePage/Hero/slider-4.jpg',
  '/HomePage/Hero/slider-5.jpg',
  '/HomePage/Hero/slider-6.jpg',
  '/HomePage/Hero/slider-7.jpg',
];

const App = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const iframeRef = useRef(null);
  const insideReq = useRef(null);

  const handleDialogClose = () => {
    const iframe = iframeRef.current;

    iframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
    iframe.src = '';
    setDialogOpen(false);
    favDialog.close();
  };

  const handleClick = () => {
    const iframe = iframeRef.current;

    iframe.src = 'https://www.youtube.com/embed/EPEbkGYBw3s';

    favDialog.showModal();
    setDialogOpen(true);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (insideReq.current && !insideReq.current.contains(event.target)) {
        handleDialogClose && handleDialogClose();
      }
    };
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [handleDialogClose]);

  SwiperCore.use([Autoplay]);

  return (
    <>
      <div className="relative">
        <div className="absolute bottom-7 left-4 w-full sm:w-[400px] lg:w-[700px] z-10">
          <h1 className="lg:text-6xl text-2xl sm:text-3xl w-3/5 sm:w-3/4 lg:w-full text-white font-title">
            Academic + Fun + Wellness = Life@TCET
          </h1>
        </div>
        <div className="absolute bottom-4 right-4 z-10">
          <button
            className="px-4 py-2 bg-white rounded-3xl text-sm text-black"
            onClick={handleClick}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="inline-block mr-2"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 12C0 5.37257 5.3726 0 12 0C15.1826 0 18.2349 1.26428 20.4853 3.5147C22.7357 5.76515 24 8.81741 24 12C24 18.6274 18.6274 24 12 24C5.3726 24 0 18.6274 0 12ZM9.80406 17.136L16.8 12.768C17.0618 12.6003 17.2202 12.3109 17.2202 12C17.2202 11.6891 17.0618 11.3996 16.8 11.232L9.78003 6.86401C9.50355 6.68968 9.15426 6.67897 8.86761 6.83597C8.58096 6.99302 8.40195 7.29313 8.40006 7.62001V16.38C8.39619 16.7148 8.57849 17.0241 8.87328 17.1828C9.16808 17.3416 9.52664 17.3235 9.80406 17.136Z"
                fill="#101828"
              />
            </svg>
            Play the Tour
          </button>
        </div>
        <div className="relative top-0 w-full">
          <Swiper
            centeredSlides={true}
            slidesPerView={'auto'}
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

                  <div className='relative w-full md:w-full lg:w-full h-[20vh] lg:h-[75vh]'>
                    <img src={el} alt="" className="w-full h-full object-cover" />
                    <div className='absolute top-0 left-0 w-full h-full' style={{background:'linear-gradient(35.79deg, #000000 -9.58%, rgba(0, 0, 0, 0) 55.17%)'}}></div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>

      <dialog id="favDialog" className={`w-[1000px] rounded-md bg-transparent transition-transform duration-500 ${
          dialogOpen ? 'translate-y-0' : '-translate-y-full'
        }`}>
        <div ref={insideReq} className="relative w-full md:w-full lg:w-full h-96">
          <iframe id="videoId"  className='rounded-md border-2 border-solid border-gray-500 shadow-lg'
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/EPEbkGYBw3s"
            title="YouTube video player"
            frameBorder="0"
            allowFullScreen
            ref={iframeRef}>
            </iframe>

          <button className='absolute px-2 py-1 bg-white rounded-3xl text-sm text-black'style={{ top: '10px', right: '10px', display: 'flex', flexDirection: 'row', alignItems: 'center' }} onClick={handleDialogClose}>
            <svg xmlns="http://www.w3.org/2000/svg" className="inline-block mr-2 w-6 h-6" style={{ color: 'white', borderRadius: '50%', marginRight: '5px', }} viewBox="0 0 24 24" id="back-arrow" > <g data-name="Layer 2"> <g data-name="arrow-back"> <rect width="24" height="24" opacity="0" transform="rotate(90 12 12)"  ></rect> <path d="M19 11H7.14l3.63-4.36a1 1 0 1 0-1.54-1.28l-5 6a1.19 1.19 0 0 0-.09.15c0 .05 0 .08-.07.13A1 1 0 0 0 4 12a1 1 0 0 0 .07.36c0 .05 0 .08.07.13a1.19 1.19 0 0 0 .09.15l5 6A1 1 0 0 0 10 19a1 1 0 0 0 .64-.23 1 1 0 0 0 .13-1.41L7.14 13H19a1 1 0 0 0 0-2z" fill="#101828" ></path> </g> </g> </svg>
            <span>Back to Slides</span>
          </button>
        </div>
      </dialog>

    </>
  );
};

export default App;