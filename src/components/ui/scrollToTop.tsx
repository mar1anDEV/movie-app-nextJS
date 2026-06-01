import { useState,useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { useLocation } from 'react-router'
function ScrollToTop() {

    const [isScroll, setScroll] = useState(false)

    useEffect(()=>{
        
            const handleScroll = ()=>{
                setScroll(window.scrollY > 100)
            }
            window.addEventListener('scroll', handleScroll)

            return ()=> window.removeEventListener('scroll',handleScroll)
    },[])
    const pathname = useLocation()
    useEffect(()=>{

        window.scrollTo(0,0)


    },[pathname])


    const scrollTop = ()=>{
        window.scrollTo({top: 0, behavior: 'smooth'})
    }

  return (
    <div className='scroll-to fixed z-80 bottom-6 right-0 md:right-6'>
        <div className='w-full h-full flex justify-end items-end'>
            <div className={`${isScroll ? 'block mr-6 mb-6 transform transition-all duration-1000 opacity-100': 'hidden opacity-0'}`}>
                <button onClick={scrollTop} aria-label="Scroll back to top" className='bg-amber-400 cursor-pointer rounded-full p-2'>
                <FontAwesomeIcon className='text-black font-bold text-xl' icon={faChevronUp}/>
                </button>
            </div>
        </div>
    </div>
  )
}

export default ScrollToTop