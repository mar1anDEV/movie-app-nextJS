"use client"
import Carousel from '../carousel';
import {SwiperSlide } from 'swiper/react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft,faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Card from '../../media/mediaCards/MediaCard';
import { useRouter } from 'next/navigation';
import '../../../styles/card.css'
import { genreMap } from '@/utils/genreMap';




interface CarouselRowProps{
    title: string,
    type: 'movie' | 'tv',
    prevBtn: number,
    nextBtn:number,
    dataObject?: any[],
}
 function CarouselRow({title,type,prevBtn,nextBtn,dataObject}: CarouselRowProps) {
    
    const navigator = useRouter()
   
    
    
   
    
      
   
    
    
  return (<>
    <section className='trending-row py-2 pb-6' aria-label={`${title} ${type === 'movie' ? 'Movies' : 'Series'}`}>
      <div className="mx-auto">
        <header className="p-6 w-[calc(100%-2rem)] xl:w-[calc(100%-12rem)] mx-auto flex"><span className='bg-amber-500 w-2 rounded-2xl'></span><h1 className="text-white text-2xl capitalize ml-2">{type === 'movie' ? `${title} Movies` : `${title} Series`}</h1></header>
        <div className="swiper-carousel w-full flex flex-row relative items-center justify-center">
          <button type="button" aria-label="Previous" className={`h-fit w-fit custom-${prevBtn}-prev-btn cursor-pointer`}><FontAwesomeIcon aria-hidden={true} className="text-4xl text-amber-400/90" icon={faChevronLeft}></FontAwesomeIcon></button>
          <Carousel prevBTN={prevBtn} nextBTN={nextBtn} >
            {dataObject?.map((eachCard)=>{
            return (
              
                <SwiperSlide onClick={()=>navigator.push(`/watch/${eachCard.id}`)} key={eachCard.id}>
                <div className='w-[240px] mx-auto'>
                  <Card
                      cardRef={eachCard.id}
                      cardImageSource={eachCard.poster_path}
                      cardTitle={type === 'movie' ? eachCard?.title : eachCard?.name}
                      cardYear={type === 'movie' ? eachCard.release_date?.slice(0,4) : eachCard.first_air_date?.slice(0,4)}
                      cardUndertitle={eachCard.overview}
                      cardRating={eachCard.vote_average}
                      cardGenres={eachCard.genre_ids.map((id: number) => genreMap[id]).join(', ')}
                      />
                </div>
              </SwiperSlide>
              
            )
          })}</Carousel>
          <button type="button" aria-label="Next" className={`h-fit w-fit custom-${nextBtn}-next-btn cursor-pointer`}><FontAwesomeIcon aria-hidden={true} className="text-4xl text-amber-400/90" icon={faChevronRight}></FontAwesomeIcon></button>
        </div>
      </div>
    </section>
  </>)
}

export default CarouselRow