import React from 'react'
import Image from 'next/image'

interface CardProps {
  cardImageSource: string
  cardTitle?: string
  cardYear?: string
  cardRating?: number
  cardRef?: number
}

function MediaCardTop({
  cardImageSource,
  cardTitle,
  cardYear,
  cardRating,
}: CardProps) {
  return (
    <div className="group relative h-32 w-full cursor-pointer overflow-hidden rounded-lg bg-zinc-900">
      <Image
        src={`https://image.tmdb.org/t/p/w1280${cardImageSource}`}
        alt={cardTitle ?? cardImageSource}
        fill
        className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
      />

      {/* clean readable overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/35 to-transparent" />

      {/* soft top shine */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-40" />

      {/* content */}
      <div className="absolute bottom-0 left-0 right-0 p-2.5">
        {cardTitle && (
          <h3 className="truncate text-[13px] font-semibold leading-tight text-white">
            {cardTitle}
          </h3>
        )}

        <div className="mt-1 flex items-center gap-1.5 text-[10px] font-medium">
          {cardYear && (
            <span className="text-white/60">{cardYear}</span>
          )}

          {cardYear && cardRating !== undefined && (
            <span className="text-white/30">•</span>
          )}

          {cardRating !== undefined && (
            <span className="text-amber-400">
              ★ {cardRating.toFixed(1)}
            </span>
          )}
        </div>
      </div>

      {/* subtle hover outline */}
      <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-white/10 transition group-hover:ring-amber-400/40" />
    </div>
  )
}

export default MediaCardTop