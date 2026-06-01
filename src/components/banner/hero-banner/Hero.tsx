
import { getMediaDetails } from '@/lib/tmdb'
import localContent from '@/data/localContentData'
import HeroClient from './HeroClient'
const contentData = localContent[0]
export default async function HeroBanner() {
 
  
  
  const data = await getMediaDetails(contentData.type, contentData.tmdbID)

  console.log(data)

  return (
    <HeroClient
      data={data}
      contentID={contentData.tmdbID}
      contentType={contentData.type}
      contentData={contentData}
    />
  )
}