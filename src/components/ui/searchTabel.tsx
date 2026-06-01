
import LoaderMediaList from "../layout/loadingState/loadingMediaList"
import formatRating from "../../utils/formatRating"
import { usePathname } from "next/navigation"
import Image from "next/image"
interface SearchTabelProps {
  searchQuery: string
}

function SearchTabel({ searchQuery }: SearchTabelProps) {
  const pathname = usePathname()

  const handleCardClick = (id: number, media_type: string) => {
    pathname(`/watch/${media_type}/${id}`)
  }

  return (
    <div className='z-50 flex flex-col'>
        <div className="h-[5vh]"></div>
      <div className="wrapper p-4 grow">
        <h2 className="text-white text-lg mb-6">Search results for:  {searchQuery}</h2>
        
        {errorF && <p className="text-white">Error: {errorF.message}</p>}
        <div className="relative h-[50vh] overflow-y-scroll">
        {loading ? <div className="absolute inset-0 flex items-center justify-center">

                <div className="mb-8">
                    <LoaderMediaList/>
                </div>

            </div>: null}
            <ul className="">
          {data?.results.map((item) => item.poster_path && (
              <li key={item.id} onClick={() => handleCardClick(item.id, item.media_type)} className="card mb-6 rounded cursor-pointer">
              <div className="card-wrapper">
                <div className="flex flex-row justify-start items-start gap-4 p-">

                    <div className="w-1/4 h-full">
                      <Image src={`https://image.tmdb.org/t/p/w200${item.poster_path}`} alt={item.title || item.name} loading="lazy" className="w-full h-full object-contain" width={300} height={450} />
                    </div>

                    <div className="w-full md:w-5/7 flex flex-col gap-1 mr-3">
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="text-white text-lg">{item.title || item.name}</h3>
                        <span className="text-sm px-2 py-0.5 rounded bg-amber-500 text-black mr-2">{item.media_type === 'tv' ? 'Series' : 'Movie'}</span>
                      </div>
                      <p className="text-gray-400 text-sm">{item.release_date?.slice(0, 4) || item.first_air_date?.slice(0, 4)}</p>
                      {item.vote_average > 0 && (
                        <p className="text-yellow-400 text-sm">★ {formatRating(item.vote_average)}</p>
                      )}
                      {item.overview && (
                        <p className="text-gray-400 text-sm line-clamp-2">{item.overview}</p>
                      )}
                    </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
        </div>
      </div>
    </div>
  )
}

export default SearchTabel
