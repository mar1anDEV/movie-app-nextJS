import React from 'react'
import Image from 'next/image'

interface CardProps {
    cardImageSource: string,
    cardTitle?: string,
    cardYear?: string,
    cardRating?: number,
    cardRef: string,
}


function MediaCardTop({ cardImageSource,cardTitle,cardYear,cardRating,cardRef}: CardProps) {
  return (
    <div className='h-32 w-xs rounded-sm bg-amber-500'>
        <div className='relative h-full w-full'>
            <Image src={cardImageSource} alt={'Card Image'} fill className='object-cover rounded-sm'/>
        </div>
    </div>
  )
}

export default MediaCardTop