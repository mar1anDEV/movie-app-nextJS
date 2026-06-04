"use client"
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { Swiper} from 'swiper/react';
import '../../../styles/carousel.css'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';



interface btnNavProp{
  prevBTN:number,
  nextBTN:number
}

function Carousel({children, prevBTN, nextBTN}: {children: React.ReactNode} & btnNavProp) {
  return (
    <Swiper
      className="trending-movies-carousel w-[calc(100%-2rem)] mx-auto xl:w-[calc(100%-12rem)]"
      modules={[Navigation, Pagination, Autoplay, EffectFade]}
      autoplay={{delay: 53000, disableOnInteraction: false, pauseOnMouseEnter: true}}
      navigation={{
        nextEl: `.custom-${nextBTN}-next-btn`,
        prevEl: `.custom-${prevBTN}-prev-btn`,
      }}
      pagination={{clickable: true, dynamicBullets: true}}
      breakpoints={
        {
  320: {
    slidesPerView: 1,
    spaceBetween: 8
  },
  620: {
    slidesPerView: 2,
    spaceBetween: 10
  },
  860: {
    slidesPerView: 3,
    spaceBetween: 10
  },
  
  1110: {
    slidesPerView: 4,
    spaceBetween: 10
  },
  
  1550: {
    slidesPerView: 6,
    spaceBetween: 10
  },
  1770: {
    slidesPerView: 7,
    spaceBetween: 10
  },
  2018: {
    slidesPerView: 8,
    spaceBetween: 10
  },
  2300: {
    slidesPerView: 9,
    spaceBetween: 10
  },
  2560: {
    slidesPerView: 10,
    spaceBetween: 10
  },
  3840: {
    slidesPerView: 12,
    spaceBetween: 12
  }
}
      }
    >
      {children}
    </Swiper>
  )
}

export default Carousel