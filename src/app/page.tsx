
import HeroSection from "../components/banner/hero-banner/Hero"
import CarouselRow from "../components/carousel/mediaCarousel/CarouselRow"
import CarouselTopRow from "@/components/carousel/mediaTopCarousel/MediaTopCarousel"
import { getCards,getMediaDetails, getMediaList,getUpcoming } from "@/lib/tmdb"
import Banner from "@/components/banner/hero-banner/Banner"
import '../styles/card.css'

async function HomePage() {

  
const dataCardsTrending = await getCards('movie', 'day', 1)

const dataCardsTopRated = await getMediaList('movie', 'top_rated', 1)
const dataCardsUpcoming = await getUpcoming('movie', 1)

console.log(dataCardsUpcoming.results[0])
  return (<>
    
  

    <div className={'block'}>


      <div id="home-page" aria-label="home page" className={`home-wrapper-main relative min-h-screen`}>

      <HeroSection/>
      <CarouselRow  title="Trending" type="movie"  prevBtn={1} nextBtn={2} dataObject={dataCardsTrending.results}/>
      <CarouselTopRow title="Top Rated" type="movie" prevBtn={3} nextBtn={4} dataObject={dataCardsTopRated.results}/>
       <Banner bannerImageSource={dataCardsUpcoming.results[0].backdrop_path} bannerTitle={dataCardsUpcoming.results[0].title} bannerSubtitle={dataCardsUpcoming.results[0].overview}/>
    </div>
    
    </div>

  </>)

}
export default HomePage