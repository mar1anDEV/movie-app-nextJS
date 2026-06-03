
import HeroSection from "../components/banner/hero-banner/Hero"
import CarouselRow from "../components/carousel/mediaCarousel/CarouselRow"
import { getCards,getMediaDetails, getMediaList } from "@/lib/tmdb"
import '../styles/card.css'
import MediaCardTop from "@/components/media/mediaCards/MediaCardTop"
import Carousel from "@/components/carousel/carousel"
import { SwiperSlide } from "swiper/react"
async function HomePage() {

  
const dataCardsTrending = await getCards('movie', 'day', 1)

const dataCardsTopRated = await getMediaList('movie', 'top_rated', 1)

  return (<>
    
  

    <div className={'block'}>


      <div id="home-page" aria-label="home page" className={`home-wrapper-main relative min-h-screen`}>

      <HeroSection/>
      <CarouselRow  title="Trending" type="movie"  prevBtn={1} nextBtn={2} dataObject={dataCardsTrending.results}/>
      <section className="mx-16 flex gap-2">
          <header className="p-6 w-[calc(100%-2rem)] xl:w-[calc(100%-12rem)] mx-auto flex"><span className='bg-amber-500 w-2 rounded-2xl'></span><h1 className="text-white text-xl capitalize ml-2">Top Rated</h1></header>
        <Carousel prevBTN={32112} nextBTN={32113}>
          
        </Carousel>
      </section>
    </div>
    
    </div>

  </>)

}
export default HomePage