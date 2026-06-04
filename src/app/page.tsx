
import HeroSection from "../components/banner/hero-banner/Hero"
import CarouselRow from "../components/carousel/mediaCarousel/CarouselRow"
import CarouselTopRow from "@/components/carousel/mediaTopCarousel/MediaTopCarousel"
import { getCards,getMediaDetails, getMediaList } from "@/lib/tmdb"
import '../styles/card.css'

async function HomePage() {

  
const dataCardsTrending = await getCards('movie', 'day', 1)

const dataCardsTopRated = await getMediaList('movie', 'top_rated', 1)

  return (<>
    
  

    <div className={'block'}>


      <div id="home-page" aria-label="home page" className={`home-wrapper-main relative min-h-screen`}>

      <HeroSection/>
      <CarouselRow  title="Trending" type="movie"  prevBtn={1} nextBtn={2} dataObject={dataCardsTrending.results}/>
      
      <CarouselTopRow title="Top Rated" type="movie" prevBtn={3} nextBtn={4} dataObject={dataCardsTopRated.results}/>
       
      
    </div>
    
    </div>

  </>)

}
export default HomePage