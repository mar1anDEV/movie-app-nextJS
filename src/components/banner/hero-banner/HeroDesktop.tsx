'use client'
import useMobile from '@/hooks/useMobile'
import HlsPlayer from '../../layout/video/VideoPlayer'
import BtnVolumeMedia from '../../ui/BtnVolumeMedia'
import { useState } from 'react'
import type { TMDBTypes } from '@/types/tmdb'
import { useRouter } from 'next/navigation'
import { Play, Plus, Star } from 'lucide-react'
import Image from 'next/image'
import Pill from '../../ui/PileBanner'

interface HeroDesktopProps {
  contentID: number
  contentType: string
  contentTitle: string
  contentUnderTitle: string
  contentReleaseDate: string
  contentRaterProvider: string
  contentDuration: string
  contentDescription: string
  contentStaring: string
  contentGenre: TMDBTypes['genres']
  contentWriters: string
  contentDirector: string
  contentRating: number
  contentAge: string | number
  contentVideoSrc: string
  contentPosterPath: string
  contentBG: string
}

export default function HeroDesktop({
  contentID,
  contentType,
  contentTitle,
  contentReleaseDate,
  contentAge,
  contentRaterProvider,
  contentDuration,
  contentDescription,
  contentStaring,
  contentGenre,
  contentWriters,
  contentDirector,
  contentRating,
  contentVideoSrc,
  contentPosterPath,
  contentBG,
}: HeroDesktopProps) {
  const [isMuted, setIsMuted] = useState(true)
  const router = useRouter()
  const isMobile = useMobile({ pixels: 768 })

  return (
    <section className="relative min-h-[620px] overflow-hidden md:min-h-[780px] xl:aspect-[21/9]">
      
      {/* Background */}
      <div className="absolute inset-0 z-0">
        {isMobile ? (
          <Image
            src={`https://image.tmdb.org/t/p/w780${contentPosterPath}`}
            alt={contentTitle}
            fill
            className="object-cover object-center"
            priority
          />
        ) : (
          <HlsPlayer backgroundImage={contentBG} muted={isMuted} src={contentVideoSrc} />
        )}
      </div>

      {/* Gradients */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black md:via-black/30 to-black/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />

      {/* Full height flex container */}
      <div className="relative z-20 flex flex-col min-h-[620px] md:min-h-[780px] xl:min-h-0 xl:absolute xl:inset-0">
        
        {/* Navbar spacer */}
        <div className="h-[96px] shrink-0" />

        
        <div className="flex-1 flex items-center xl:mx-18 px-4 md:px-8 pb-10">
          <div className="max-w-2xl w-full py-6">

            {/* Badge */}
            <div className="mb-6 w-fit rounded-full border border-amber-400/40 bg-amber-400/15 px-4 py-1">
              <div className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" />
                <span className="text-[11px] font-bold uppercase tracking-[2px] text-amber-400">
                  Now Streaming
                </span>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-5xl max-w-xl font-black uppercase tracking-tight text-white md:text-7xl">
              {contentTitle}
            </h1>

            {/* Meta */}
            <div className="mt-5 flex flex-wrap items-center gap-2">
              <Pill>{contentReleaseDate}</Pill>
              <Pill>{contentAge}+</Pill>
              <Pill>{contentDuration}</Pill>
            </div>

            {/* Rating */}
            <div className="mt-4 flex flex-wrap items-center gap-3 text-sm">
              <Star className="fill-yellow-400 text-yellow-400" size={18} />
              <span className="text-white">{(contentRating / 2).toFixed(1)}</span>
              <span className="rounded bg-gradient-to-r from-[#6daaba] to-[#01b4e4] px-2 py-1 text-xs font-black text-white">
                {contentRaterProvider}
              </span>
            </div>

            {/* Genres */}
            <div className="mt-4 flex flex-wrap gap-2">
              {contentGenre?.map((g) => (
                <Pill key={g.id}>{g.name}</Pill>
              ))}
            </div>

            {/* Description */}
            <p className="mt-5 max-w-lg leading-7 text-white/75 line-clamp-3">
              {contentDescription}
            </p>

            {/* Crew */}
            <div className="mt-4 hidden flex-col gap-1.5 text-sm md:flex">
              <p>
                <span className="font-bold text-amber-400">Director: </span>
                <span className="text-white/55">{contentDirector}</span>
              </p>
              <p>
                <span className="font-bold text-amber-400">Cast: </span>
                <span className="text-white/55">{contentStaring}</span>
              </p>
              <p>
                <span className="font-bold text-amber-400">Writer: </span>
                <span className="text-white/55">{contentWriters}</span>
              </p>
            </div>

            {/* Buttons — volume inline */}
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => router.push(`/watch/${contentID}?type=${contentType}`)}
                className="flex h-12 items-center justify-center gap-2 rounded-xl bg-[#FFA500] px-7 font-bold text-black transition hover:bg-yellow-300 cursor-pointer"
              >
                <Play size={18} className="fill-black" />
                Play Now
              </button>
              <button
                type="button"
                className="flex h-12 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-7 font-semibold transition hover:bg-white hover:text-black cursor-pointer text-white"
              >
                <Play size={18} />
                Watch Trailer
              </button>
              <button
                type="button"
                className="flex h-12 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-7 font-semibold transition hover:bg-white/10 cursor-pointer text-white"
              >
                <Plus size={18} />
                Add to Watchlist
              </button>
              <div className='hidden md:block'><BtnVolumeMedia
                
                onVolumeState={isMuted}
                onClick={() => setIsMuted(!isMuted)}
              /></div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 z-20 h-24 bg-gradient-to-t from-black to-transparent" />
    </section>
  )
}