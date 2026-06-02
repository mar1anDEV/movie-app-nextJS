import StarRating from '../../ui/Star';
import '../../../styles/card.css'
import Image from 'next/image';


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
    
      <div id={`${cardRef}`} className="card mx-auto w-full relative cursor-pointer group overflow-hidden rounded-lg">
      <div className="card-body">
        <div className="card-image h-93.75 lg:h-85.25 overflow-hidden relative">
          <Image
            src={`https://image.tmdb.org/t/p/w500${cardImageSource}`}
            alt={cardTitle}
            className="block w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            width={500}
            height={345}
          />
        </div>
      </div>

      <div className="card-overlay-desktop absolute transition-transform duration-100  left-0 right-0 top-full lg:inset-0 w-full h-full scale-75 opacity-0 lg:group-hover:opacity-100 lg:group-hover:scale-100">
        <div className="relative h-full p-2 flex items-end">
        
          <div className="card-body-info cursor-pointer glass-panel transition-all duration-initial backdrop-blur-md  w-full h-fit lg:h-full p-4 rounded-lg">
            
            <div className='flex flex-col justify-between h-full'>
              <div className='metadata-card'>
                <div className="card-header mb-1">
              <span className="text-white text-lg font-semibold drop-shadow-lg">{cardTitle}</span>
              <span className="text-white/90 ml-1.5 mb-1.5 text-sm drop-shadow-md">{cardYear}</span>
            </div>
            <div className="card-underheader mb-1">
              <span className="text-white/90 card-description line-clamp-3 font-medium text-sm drop-shadow-md">{cardUndertitle}</span>
            </div>
            <div className="card-genres mt-1.5">
              <p className='text-yellow-500 text-md font-bold'>
                Genres: <span className="text-white/90 font-medium text-sm drop-shadow-md">{cardGenres}</span>
              </p>
            </div>
            <div className="card-show-rating mt-1.5">
              <div className='text-yellow-500 text-md font-bold flex flex-row items-center'>
                Rating: <div className='inline-block ml-2'><StarRating rating={cardRating / 2} /></div>
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