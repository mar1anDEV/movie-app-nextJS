import StarRating from '../../ui/Star';
import '../../../styles/card.css'
import Image from 'next/image';
import { Star } from 'lucide-react';

interface CardProps {
    cardImageSource: string,
    cardTitle: string,
    cardYear: string,
    cardUndertitle: string,
    cardGenres: string,
    cardRating: number,
    cardRef: string,
}

const Card = ({
  cardImageSource,
  cardTitle,
  cardYear,
  cardUndertitle,
  cardGenres,
  cardRating,
  cardRef,
 
}: CardProps) => {




  return (
    
    <div id={`${cardRef}`} className="card mx-auto w-full relative cursor-pointer group flex flex-row">
      <div className="card-body">
        <div className="card-image h-93.75 lg:h-85.25 overflow-hidden relative">
          <Image
            src={`https://image.tmdb.org/t/p/w500${cardImageSource}`}
            alt={cardTitle}
            className="block w-full h-full object-cover overflow-hidden rounded-lg"
            width={500}
            height={345}
          />
          <div className='absolute inset-0 bg-black/30'>
          <div className='absolute left-0 right-0 bottom-0 h-1/2 bg-linear-to-t from-black to-transparent'></div>
            <div className='absolute inset-0 flex items-end p-4'>
              <div className='flex flex-col gap-2 w-full'>
                <h3 className='text-white text-md font-bold truncate'>{cardTitle}</h3>
                <div className='flex flex-row justify-between w-full'>
                 
                  <div className='flex items-center gap-1'>
                    <Star size={16} className='text-yellow-400 fill-current' />
                    <span className='text-white text-xs font-bold'>{cardRating.toFixed(1) / 2}</span>
                  </div>
                  <div>
                    <p className='text-gray-300 text-xs'>{cardYear}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>    
    </div>
    
  );
};

export default Card;