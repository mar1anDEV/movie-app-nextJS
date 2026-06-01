import Carousel from './carousel';
import {SwiperSlide } from 'swiper/react';
import useMediaList from '../hooks/fetchMedia/fetchCards/useMediaList';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft,faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Card from '../card/Card';
import { genreMap } from '../utils/genreMap';
import '../css/card.css'
import { useNavigate } from "react-router";



interface CarouselRowProps{
    title: string,
    type: 'movie' | 'tv',
    endParam?: string,
    timeWindow?: 'day' | 'week',
    prevBtn: number,
    nextBtn:number
}
function CarouselRow({title,type,endParam,timeWindow,prevBtn,nextBtn}: CarouselRowProps) {
    const navigate = useNavigate()
    
    const { data, loading, errorF } = useMediaList({type: type, endParam: endParam, pageNumber: 1, timeWindow: timeWindow})
    
   
    const dataObject = data?.results?.filter((item) => item.vote_average > 0 && item.poster_path !== null && item.overview !== "")
      
   
    
    
  return (<>
    <section className='trending-row py-2 pb-6' aria-label={`${title} ${type === 'movie' ? 'Movies' : 'Series'}`}>
      <div className="w-[calc(100%-2rem)] xl:w-[calc(100%-12rem)] mx-auto">
        <header className="p-6"><h1 className="text-white text-2xl capitalize">{type === 'movie' ? `${title} Movies` : `${title} Series`}</h1></header>
        <div className="swiper-carousel w-full flex flex-row relative items-center justify-center">
          <button type="button" aria-label="Previous" className={`h-fit w-fit custom-${prevBtn}-prev-btn cursor-pointer`}><FontAwesomeIcon aria-hidden={true} className="text-4xl text-amber-400/90" icon={faChevronLeft}></FontAwesomeIcon></button>
          <Carousel prevBTN={prevBtn} nextBTN={nextBtn} >
            {dataObject?.map((eachCard)=>{
            return (
              
                <SwiperSlide onClick={()=>navigate(`/watch/${eachCard.id}`)} key={eachCard.id}>
                <div className='w-[240px] mx-auto'>
                  <Card
                      cardRef={eachCard.id}
                      cardImageSource={eachCard.poster_path}
                      cardTitle={type === 'movie' ? eachCard?.title : eachCard?.name}
                      cardYear={type === 'movie' ? eachCard.release_date?.slice(0,4) : eachCard.first_air_date?.slice(0,4)}
                      cardUndertitle={eachCard.overview}
                      cardRating={eachCard.vote_average}
                      cardGenres={eachCard.genre_ids.map((id) => genreMap[id]).join(', ')}
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