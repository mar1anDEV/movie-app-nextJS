"use client"
import Carousel from './carousel';
import { SwiperSlide } from 'swiper/react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import MediaCardTop from '@/components/media/mediaCards/MediaCardTop';
import { useRouter } from 'next/navigation';
import '../../../styles/card.css'



interface CarouselTopRowProps {
  title: string,
  type: 'movie' | 'tv',
  prevBtn: number,
  nextBtn: number,
  dataObject?: any[],
}

function CarouselTopRow({ title, type, prevBtn, nextBtn, dataObject }: CarouselTopRowProps) {
  const navigator = useRouter()

  return (
    <>
      <section className='trending-row py-2 pb-6' aria-label={`${title} ${type === 'movie' ? 'Movies' : 'Series'}`}>
        <div className="mx-auto">
          <header className="p-6 w-[calc(100%-2rem)] xl:w-[calc(100%-12rem)] mx-auto flex">
            <span className='bg-amber-500 w-2 rounded-2xl'></span>
            <h1 className="text-white text-xl capitalize ml-2">
              {type === 'movie' ? `${title} Movies` : `${title} Series`}
            </h1>
          </header>
          <div className="swiper-carousel w-full flex flex-row relative items-center justify-center">
            <button type="button" aria-label="Previous" className={`h-fit w-fit custom-${prevBtn}-prev-btn cursor-pointer`}>
              <FontAwesomeIcon aria-hidden={true} className="text-4xl text-amber-400/90" icon={faChevronLeft} />
            </button>
            <Carousel prevBTN={prevBtn} nextBTN={nextBtn}>
              {dataObject?.map((eachCard) => (
                <SwiperSlide onClick={() => navigator.push(`/watch/${eachCard.id}`)} key={eachCard.id}>
                  
                      <MediaCardTop
                        cardRef={eachCard.id}
                        cardImageSource={eachCard.poster_path}
                        cardTitle={type === 'movie' ? eachCard?.title : eachCard?.name}
                        cardYear={type === 'movie' ? eachCard.release_date?.slice(0, 4) : eachCard.first_air_date?.slice(0, 4)}
                        cardRating={eachCard.vote_average}
                      />
                    
                </SwiperSlide>
              ))}
            </Carousel>
            <button type="button" aria-label="Next" className={`h-fit w-fit custom-${nextBtn}-next-btn cursor-pointer`}>
              <FontAwesomeIcon aria-hidden={true} className="text-4xl text-amber-400/90" icon={faChevronRight} />
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default CarouselTopRow