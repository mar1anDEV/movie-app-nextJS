import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock,faThumbsUp,faBookmark } from '@fortawesome/free-regular-svg-icons'
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import useMediaDetails from "../../hooks/fetchMedia/useMediaDetails"
import useMediaList from '../../hooks/fetchMedia/fetchCards/useMediaList';
import StarRating from "../common/star"
import { useLocation} from 'react-router';
import { useState,useEffect } from 'react';
import TrailerTabel from '../layout/trailerTabel';
import useMobile from '../../hooks/useMobile';
import { formatVoteCount } from '../../utils/formatVote';
import { formatDuration } from '../../utils/formatTime';



interface bannerCustomProp{
  mediaType?: string,
  type: string
}


function BannerCustom({type, mediaType}: bannerCustomProp) {



      const isMobile = useMobile({pixels : 768})

      const[isLocation,setLocation] = useState('')

      const[isContentType,setContentType] = useState('')

      const[hasSpace,setHasSpace] = useState(false)

      const[isTrailerTabel,setTrailerTabel] = useState(false)

      const[isId,setId] = useState<number | undefined>(undefined)


      

      const location = useLocation().pathname

      useEffect(() => {
        if (mediaType) {
            const label = mediaType.replace(/[-_]/g, ' ').replace(/\b\w/g, c => c.toUpperCase())
            setLocation(mediaType)
            setContentType(label)
            setHasSpace(true)
            return
        }

        if (location === '/') {
            setLocation('trending')
            setContentType('Trending')
        } else if (location === '/movies/popular') {
            setLocation('popular')
            setContentType('Popular')
            setHasSpace(true)
        } else if (location === '/movies/top_rated') {
            setLocation('top_rated')
            setContentType('Top Rated')
            setHasSpace(true)
        } else if (location === '/movies/trending') {
            setHasSpace(true)
            setLocation('trending')
            setContentType('Trending')
        }

      }, [location, mediaType])

      
    
    const {data} = useMediaList({ type: type, pageNumber: 1,endParam: isLocation, timeWindow: isLocation === 'trending' ? 'week' : undefined})
    



    useEffect(()=>{
      if(data?.results[0].id){
        setId(data?.results[0].id)
      }
    },[isId,data?.results])

    const dataSRC ={id: isId, type: 'movie'}
    const dataBanner = useMediaDetails({id: dataSRC.id, type:type})

    const responsiveImagesBanner = {
        original: `https://image.tmdb.org/t/p/original${dataBanner.data?.backdrop_path}`,
        lg: `https://image.tmdb.org/t/p/w1280${dataBanner.data?.backdrop_path}`,
        md: `https://image.tmdb.org/t/p/w780${dataBanner.data?.backdrop_path}`,
        xs: `https://image.tmdb.org/t/p/w342${dataBanner.data?.poster_path}`,
        sm: `https://image.tmdb.org/t/p/w780${dataBanner.data?.poster_path}`,
    }

    const rawDate = dataBanner.data?.release_date || dataBanner.data?.first_air_date
    const formateDate = rawDate ? new Date(rawDate).toLocaleDateString('en-GB', { year: 'numeric' }) : ''

    
    useEffect(() => {
    document.body.style.overflow = isTrailerTabel ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isTrailerTabel]);



  const trailerSource = dataBanner.data?.videos?.results?.find((v) => v.type === 'Trailer' && v.site === 'YouTube')?.key


  console.log(dataBanner.data?.created_by?.[0]?.name)

  return (<>

      

    {isTrailerTabel && (
    <TrailerTabel id={trailerSource} onClose={() => setTrailerTabel(false)} title={dataBanner.data?.title}/>
)}

    <section className='h-auto'>
      <div className='relative'>
        {hasSpace && <div className='h-[8vh]'></div>}
        <picture className='absolute inset-0 w-full h-full block object-cover object-center'>
          <source srcSet={responsiveImagesBanner.lg} media="(min-width: 1280px)"/>
          <source srcSet={responsiveImagesBanner.md} media="(min-width: 780px) and (max-width: 1279px)"/>
          <source srcSet={responsiveImagesBanner.sm} media="(min-width: 481px)"/>
          <source srcSet={responsiveImagesBanner.xs} media="(max-width: 480px)"/>
          <img src={responsiveImagesBanner.original} className="h-full object-cover object-center w-full" alt={dataBanner.data?.title} loading="lazy" />
          <div className='absolute inset-0 bg-black/70 backdrop-blur-md'></div>
        </picture>

        <div className='relative mx-auto w-[calc(100%-2rem)] xl:w-[calc(100%-12rem)] gap-[1rem]'>
          <div className='flex flex-col'>
            <div className='h-[10vh]'></div>
            <div className='wrapper'>
              <div className='flex flex-row w-full gap-[1rem]'>

                <div className='min-w-[280px] max-w-[260px]  hidden md:block'>
                  <div className='flex flex-col gap-y-4 h-full'>
                    <div className='poster-content flex-1 relative'>
                      <div className='card-image'>
                        <div className='absolute inset-0'>
                          <img src={`https://image.tmdb.org/t/p/w342${dataBanner.data?.poster_path}`}  alt={dataBanner.data?.title} className='w-full h-full block rounded-md object-cover' loading="lazy"/>
                        </div>
                      </div>
                    </div>
                    <div className='poster-interaction'>
                      <div className='grid gap-y-2'>
                        <div className='trailer-interaction w-full border border-white/50 py-1 group hover:bg-white cursor-pointer transition-colors duration-300'>
                          <div className='w-fit mx-auto cursor-pointer'>
                            <button type='button' aria-label={`See trailer for ${dataBanner.data?.title}`} onClick={()=>setTrailerTabel(!isTrailerTabel)} className='flex flex-row gap-2 justify-center items-center cursor-pointer'>
                              <FontAwesomeIcon aria-hidden={true} className='text-white group-hover:text-black cursor-pointer' icon={faPlay}/>
                              <span className='text-white/90 group-hover:text-black cursor-pointer'>See Trailer</span>
                            </button>
                          </div>
                        </div>
                        <div className='save-interaction w-full border border-white/50 py-1 group hover:bg-white cursor-pointer transition-colors duration-300'>
                          <div className='w-fit mx-auto'>
                            <button type='button' aria-label="Save to watch later" className='flex flex-row gap-2 justify-center items-center cursor-pointer'>
                              <FontAwesomeIcon icon={faBookmark} aria-hidden={true} className='text-white group-hover:text-black cursor-pointer'/>
                              <span className='text-white/90 group-hover:text-black cursor-pointer'>Save</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <aside className="grow">
                  <div className='grid gap-4'>
                    <div className='announce w-fit flex items-center rounded-full border border-amber-500/40 bg-amber-500/20 px-4 py-1'>
                      <span className='uppercase text-center font-semibold text-[11px] tracking-[2px] text-amber-400/90'>
                        Nr.1 in {type === 'movie' ? 'Movies' : 'TV Series'} - {isContentType}
                      </span>
                    </div>

                    <header className='w-fit'>
                      <h1 className="title-banner font-extrabold text-white">{dataBanner.data?.title || dataBanner.data?.name}</h1>
                    </header>

                    <div className="tagline-wrapper w-fit">
                      <p className='text-gray-100 block text-md leading-relaxed max-w-prose font-bold'>{dataBanner.data?.tagline}</p>
                    </div>

                    <div className="genres meta-row w-fit">
                      <div className='flex flex-wrap gap-2'>
                        <div className='info-genres-container'>
                          <div className="info-genres-row">
                            <ul className='flex flex-wrap gap-2'>
                              {dataBanner.data?.genres?.map((g) => {
                                return (
                                  <li className='flex justify-between py-[0.45rem] px-4 bg-amber-400/20 rounded-md' key={g.id}>
                                    <span className='text-sm text-white tracking-wider font-bold'>{g.name}</span>
                                  </li>
                                )
                              })}
                            </ul>
                          </div>
                        </div>
                        <div className="meta-row mt-4 md:mt-0">
                          <div className="wrapper flex gap-2 items-center">
                            <div className='content-year-wrapper p-1 px-[0.8rem] border border-gray-400 w-fit'>
                              <span className='content-year text-sm font-bold tracking-[1px] text-white'>{formateDate}</span>
                            </div>
                            <div className='time-content-wrapper flex justify-center items-center'>
                              <div className={`${type === 'movie' ? 'flex flex-row gap-1.5' : 'hidden'}`}>
                                <FontAwesomeIcon className="text-md font-bold text-white my-auto" icon={faClock}/>
                                <span className='text-sm tracking-wider text-white font-bold'>{type === 'movie' ? formatDuration(dataBanner.data?.runtime ?? 0) : ''}</span>
                              </div>
                            </div>
                            <div className='language h-fit'>
                              <div className="wrapper">
                                <span className='uppercase tracking-wide text-center text-white'>{dataBanner?.data?.original_language}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="imdb-info-panel w-fit">
                      <div className="flex w-fit items-center gap-2 mt-2">
                        <div className="content-rating-wrapper flex flex-row gap-2 items-center">
                          <div className="content-rating-provider px-3 py-[0.20rem] rounded-sm bg-gradient-to-r from-[#6daaba] to-[#01b4e4]">
                            <span className='text-white text-sm font-bold tracking-[1px]'>TMDB</span>
                          </div>
                          <div className="content-rating-stars">
                            <StarRating rating={(dataBanner.data?.vote_average ?? 0) / 2}/>
                          </div>
                        </div>
                        <div className={(dataBanner.data?.vote_count ?? 0) >= 1000 ? 'flex text-white p-1 px-[0.8rem] border border-gray-400 font-medium items-center' : 'hidden'}>
                          {formatVoteCount(dataBanner.data?.vote_count ?? 0)} <FontAwesomeIcon className='ml-2 text-white' icon={faThumbsUp}/>
                        </div>
                      </div>
                    </div>

                    <div className='overview max-w-prose'>
                      <p className='text-white !line-clamp-5'>
                        {dataBanner.data?.overview}
                      </p>
                    </div>

                    <div className='director w-fit'>
                      <div className='font-bold text-md tracking-wide text-amber-400/95'>Directed by:
                        <span className='text-white font-medium ml-1'>{dataBanner.data?.credits?.crew?.filter((d) => d.job === 'Director').map((d) => d.name).join(', ') || dataBanner.data?.created_by?.[0]?.name}</span>
                      </div>
                    </div>

                    <div className="panel-interaction-container lg:mt-4 w-full md:w-fit">
                      <div className='flex flex-row gap-2.5'>
                        <button type="button" className='bg-amber-500 lg:py-3 w-1/2 md:w-fit py-2 px-4 lg:px-6 rounded-xl cursor-pointer transition-all duration-500 hover:bg-amber-400 hover:shadow-xl hover:shadow-amber-400/50 hover:-translate-y-1'>
                          <span className='font-bold tracking-[1px]'><FontAwesomeIcon aria-hidden={true} icon={faPlay} /> Play Now</span>
                        </button>
                        {isMobile && (
                          <button type="button" onClick={()=>setTrailerTabel(!isTrailerTabel)} className='bg-white lg:py-3 w-1/2 md:w-fit py-3 px-4 lg:px-6 rounded-xl cursor-pointer transition-all duration-500'>
                          <span className='font-bold tracking-[1px]'>See Trailer</span>
                        </button>
                        )}
                      </div>
                      {isMobile && (
                        <button type="button" className='w-full mt-6 p-2 border border-gray-400 text-white'>
                          <FontAwesomeIcon aria-hidden={true} className='text-white mr-2' icon={faBookmark}/>
                          Save
                        </button>
                      )}
                    </div>
                  </div>
                </aside>

              </div>
            </div>
            <div className='h-[10vh]'></div>
          </div>
        </div>
      </div>
    </section>
  </>
  )
}

export default BannerCustom