
import HeroSection from "../components/banner/hero-banner/Hero"
import CarouselRow from "../components/carousel/mediaCarousel/CarouselRow"
import { getCards } from "@/lib/tmdb"
import '../styles/card.css'
async function HomePage() {

  
const dataCards = await getCards('movie', 'day', 1)


  return (<>
    
  

    <div className={'block'}>


      <div id="home-page" aria-label="home page" className={`home-wrapper-main relative min-h-screen`}>

      <HeroSection/>
      
      <CarouselRow  title="Trending" type="movie"  prevBtn={1} nextBtn={2} dataObject={dataCards.results}/>
    </div>
    
    </div>

  </>)

}
export default HomePage