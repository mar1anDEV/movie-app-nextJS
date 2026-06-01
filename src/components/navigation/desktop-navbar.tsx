"use client"

import Link from 'next/link';
import { useState,useEffect } from 'react';
import { usePathname } from 'next/navigation';
import '../../fonts/fonts.css';
import { menuLinks } from '../../constants/navigationData';

import { faMagnifyingGlass,faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import SearchTabel from '../ui/searchTabel';

function DesktopNavbar() {
  
  const location = usePathname();



 
  const [isSearchOpen, setSearchOpen] = useState(false)

  const [isSearchTabelOpen, setSearchTabelOpen] = useState(false)

  const [searchQuery, setSearchQuery] = useState('')
  
  


  useEffect(()=>{
    if(searchQuery.length > 0){
      setSearchTabelOpen(true)
    }
    else if(searchQuery.length == 0){
      setSearchTabelOpen(false)
    }

  },[searchQuery])


  useEffect(()=> {
    if(!isSearchOpen){
      setSearchQuery('')
    }
    
  },[isSearchOpen])

  

  useEffect(()=>{
    document.body.style.overflow = isSearchOpen ? 'hidden' : '';
  }, [isSearchOpen])

  const toggleSearch = () => {
    setSearchOpen(!isSearchOpen)
  }






  


  return (
    <header className={`header-navbar-holder hidden md:block absolute left-0 right-0 z-50 w-full transition-all duration-300 ${!isSearchOpen ? 'overflow-hidden' : ''}`}>
      <div className="wrapper relative">
        <div className="nav-container relative backdrop-blur-[40px] bg-black/50 py-2 xl:py-6 w-full transition-all duration-300">
          <nav className="w-[calc(100%-2rem)] xl:w-[calc(100%-12rem)] hidden sm:flex justify-between mx-auto transition-all duration-300">
            <div className="navbar-brand w-fit">
              <Link href="/" className="cursor-pointer" aria-label="logo">
                <h1 className="brand">{"Logo"}</h1>
              </Link>
            </div>
            <div className="ul-list flex mr-0 xl:mr-6">

            


              <ul className="nav-links-desktop hidden md:block h-fit my-auto">
                <button className='h-fit m-auto p-3 cursor-pointer transition-all duration-300 rounded-full hover:bg-white/10 active:bg-white/90' onClick={toggleSearch}> <FontAwesomeIcon icon={faMagnifyingGlass} className="text-white/80 text-xl" /> </button>
                {menuLinks.map((link) => {
                  return (
                    <li
                      key={link.path}
                      className="nav-link text-xs lg:text-md xl:text-[16px] nav-text-1 group mx-4 relative inline-block cursor-pointer"
                    >
                      <Link href={link.path} aria-current={location.pathname === link.path ? 'page' : undefined}>
                        <span className="nav-text group-hover:!text-amber-500">
                          {link.name}
                        </span>
                      </Link>
                    </li>
                  );
                })}

                


              </ul>
            </div>


                
                  

          </nav>
        </div>

          <section className={`search-modal absolute top-full left-0 -z-10 right-0 min-h-screen transition-all duration-300 ${isSearchOpen ? 'pointer-events-auto visible bg-black/80' : 'pointer-events-none invisible'}`}>
              <div className="search-container w-[60%] xl:w-[30%] mx-auto mt-4 relative">
                    <div className={`wrapper-search-input relative backdrop-blur-2xl rounded-full bg-white/5 border border-white/10 transition-all duration-300 ${isSearchOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}>
                      <input
                        value={searchQuery}
                        onChange={(e)=> setSearchQuery(e.target.value)}
                        type="text"
                        placeholder="What are you looking for?"
                        className="w-full p-[0.65rem] ml-4 rounded-full bg-transparent outline-0 text-white placeholder-white/80"
                      >
                      </input>
                      <FontAwesomeIcon onClick={()=> setSearchOpen(false)} icon={faClose} className="text-white/40 cursor-pointer absolute right-4 top-1/2 transform -translate-y-1/2 text-md" />
                    
                    </div>
                    <div className={`absolute left-0 right-0 top-1/3 -z-10 flex flex-col rounded-xl backdrop-blur-2xl  transition-all duration-300 ${isSearchTabelOpen ? 'opacity-100 translate-y-0 border border-white/10 bg-white/5 ' : 'opacity-0 -translate-y-2'}`}>
                      {isSearchTabelOpen && <SearchTabel searchQuery={searchQuery}/>}
                    </div>
                </div>
          </section>

      </div>
    </header>
  );
}

export default DesktopNavbar;