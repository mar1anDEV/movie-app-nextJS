import React from 'react'
import Image from 'next/image'

interface BannerProps {
  bannerImageSource: string
  bannerPosterSource?: string
  bannerTitle: string
  bannerRef?: string
}

function Banner({ bannerImageSource, bannerPosterSource, bannerTitle, bannerRef }: BannerProps) {
  return (
    <section className="upcoming-banner h-160">
      <div className="relative w-full h-full">
        <div className="absolute inset-0 bg-black flex">
          <div className="hidden md:flex flex-1" />

          <div className="flex-1 md:flex-4">
            <div className="relative w-full h-full">
              <Image
                src={`https://image.tmdb.org/t/p/original${bannerImageSource}`}
                alt={bannerTitle}
                className="object-cover"
                fill
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
            </div>
          </div>
        </div>

        <div className="relative h-full w-full">
          <div className="absolute inset-0 w-1/3 bg-gradient-to-r from-black via-black/90 via-75% to-transparent hidden md:block" />
          <div className="absolute inset-0 w-1/3 bg-gradient-to-r from-black via-black/90 via-65% to-transparent hidden md:block" />
          <div className="absolute inset-0 w-1/3 bg-gradient-to-r from-black via-black/90 via-65% to-transparent hidden md:block" />
        </div>

        <div className="container absolute inset-0 flex my-18 mx-16 px-4">
          <div className="relative hidden md:block">
            <div className="absolute -inset-6 rounded-3xl bg-amber-500/15 blur-3xl pointer-events-none" />

            <div className="relative h-full w-[320px] overflow-hidden rounded-2xl border border-amber-500/30 shadow-[0_0_10px_rgba(245,158,11,0.2)]">
              <Image
                src={`https://image.tmdb.org/t/p/original${bannerPosterSource || bannerImageSource}`}
                alt={bannerTitle}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner