import Link from "next/link";

function Footer() {
  const date = new Date().getFullYear();
  return (
    <footer aria-label="Site footer" className='hidden md:block z-50 bg-[#0a0a0a]'>
      <div className='flex flex-col'>

        <div className='w-[calc(100%-1rem)] xl:w-[calc(100%-12rem)] mx-auto py-12'>
          <div className='grid grid-cols-2 gap-12 items-start'>

            <div>
              <h1 className='text-[#FFA500] brand text-2xl font-bold tracking-wide'>LOGO</h1>
              <p className='text-gray-500 text-sm mt-2 leading-relaxed max-w-xs'>Your cinematic experience.</p>
            </div>

            <div className='grid grid-cols-2 gap-8'>
              <div>
                <p className='text-[#FFA500] text-xs font-bold tracking-widest mb-4'>NAVIGATE</p>
                
                <div className='flex flex-row gap-6'>
                    <div className='row-1'>
                    <Link href='/' className='text-gray-400 text-sm block mb-3 hover:text-[#FFA500] transition-colors duration-200'>Home</Link>
                    <Link href='/movies' className='text-gray-400 text-sm block mb-3 hover:text-[#FFA500] transition-colors duration-200'>Movies</Link>
                    <Link href='/tv-shows' className='text-gray-400 text-sm block mb-3 hover:text-[#FFA500] transition-colors duration-200'>TV Shows</Link>
                </div>
                <div className='row-2'>
                    <Link href='/movies' className='text-gray-400 text-sm block mb-3 hover:text-[#FFA500] transition-colors duration-200'>Popular</Link>
                    <Link href='/' className='text-gray-400 text-sm block mb-3 hover:text-[#FFA500] transition-colors duration-200'>Trending</Link>
                    <Link href='/' className='text-gray-400 text-sm block mb-3 hover:text-[#FFA500] transition-colors duration-200'>Top Rated</Link>
                </div>
                </div>
              </div>
              <div>
                <p className='text-[#FFA500] text-xs font-bold tracking-widest mb-4'>INFO</p>
                <a href='https://github.com/mar1anDEV' target='_blank' rel='noreferrer' className='text-gray-400 text-sm block mb-3 hover:text-[#FFA500] transition-colors duration-200'>GitHub</a>
                <a href='https://www.themoviedb.org/' target='_blank' rel='noreferrer' className='text-gray-400 text-sm block mb-3 hover:text-[#FFA500] transition-colors duration-200'>TMDB</a>
              </div>
            </div>

          </div>
        </div>

        <div className='border-t border-gray-800'>
          <div className='w-[calc(100%-5rem)] xl:w-[calc(100%-12rem)] mx-auto py-4'>
            <div className='grid lg:grid-cols-3'>
              <span className='text-gray-500 hidden lg:block text-sm whitespace-nowrap'>Built by <a className='hover:underline hover:text-[#FFA500] transition-colors duration-200' target='_blank' rel='noreferrer' href="https://github.com/mar1anDEV">mar1anDEV</a></span>
              <span className='text-gray-500 text-center text-sm whitespace-nowrap'>&#169; {date}. All rights reserved.</span>
              <span className='text-gray-500 hidden lg:block text-end text-sm'>Data provided by <a className='hover:underline hover:text-[#FFA500] transition-colors duration-200' href="https://www.themoviedb.org/" target='_blank' rel='noreferrer'>TMDB</a>. Not affiliated with any streaming service</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer


