'use client'

import useMobile from '@/hooks/useMobile'
import HeroDesktop from './HeroDesktop'
import type { TMDBTypes } from '@/types/tmdb'

interface HeroClientProps {
  data: TMDBTypes,
  contentID: number,
  contentType: string,
  contentData: {
    type: string
    episodeDuration?: number
    videoID: string
    posterPath?: string
  }
}

export default function HeroClient({ data, contentData }: HeroClientProps) {

  const timeShortContent = (contentData.episodeDuration ?? 0) + ' minutes'
  
  const formatDuration = (fetchedTime: number) => {
    if (fetchedTime <= 60) return `${fetchedTime} minutes`
    const hours = Math.floor(fetchedTime / 60)
    const mins = fetchedTime % 60
    return `${hours}h ${mins}min`
  }

  const sharedProps = {
    contentID: data.id,
    contentPosterPath: `https://image.tmdb.org/t/p/w780${data.poster_path ?? ''}`,
    contentTitle: (contentData.type === 'tv' ? data?.name : data?.title) ?? '',
    contentAge: data?.release_dates?.results?.filter((c) => c.iso_3166_1 === 'DE')[0]?.release_dates[0]?.certification ?? '16',
    contentReleaseDate: (contentData.type === 'tv' ? data?.first_air_date?.slice(0, 4) : data?.release_date?.slice(0, 4)) ?? '',
    contentDescription: data?.overview ?? '',
    contentRating: Math.round(data?.vote_average ?? 0),
    contentDuration: contentData.type === 'tv' ? timeShortContent : formatDuration(data?.runtime ?? 0),
    contentStaring: data?.credits?.cast?.map((a) => a.name).slice(0, 3).join(', ') ?? '',
    contentWriters:
      data?.credits?.crew?.filter((w) => ['Writer', 'Screenplay', 'Story'].includes(w.job)).map((w) => w.name).slice(0, 2).join(', ') ||
      data?.credits?.crew?.filter((w) => w.department === 'Writing').map((w) => w.name).slice(0, 2).join(', ') ||
      '',
    contentRaterProvider: 'TMDB',
    contentUnderTitle: data?.tagline || (data?.overview?.slice(0, 80) + '....') || '',
    contentDirector:
      contentData.type === 'tv'
        ? data?.created_by?.map((d) => d.name).join(', ') ?? ''
        : data?.credits?.crew?.filter((d) => d.job === 'Director').map((d) => d.name).join(', ') ?? '',
  }
    console.log(sharedProps.contentPosterPath)
  return <>
     <HeroDesktop {...sharedProps} contentGenre={data?.genres ?? []} contentVideoSrc={contentData.videoID} contentType='tv' contentBG={`https://image.tmdb.org/t/p/original${data.backdrop_path}`} />
  </>
    
  
}