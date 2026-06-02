"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faCaretLeft,
  faCaretRight,
  faMagnifyingGlass,
  faClose,
} from "@fortawesome/free-solid-svg-icons"

import { menuLinks } from "../../constants/navigationData"
import { fetchLinks } from "../../utils/fetchLinks"
import Hamburger from "../ui/hamburger"
import "../../fonts/fonts.css"

const appName = "Cinema"

function MobileNav() {
  const router = useRouter()
  const pathname = usePathname()

  const [getRef, setGetRef] = useState("")
  const [isOpen, setIsOpen] = useState(false)
  const [dropDownSM, setDropDownSm] = useState(false)
  const [isSearchOpen, setSearchOpen] = useState(false)

  const date = new Date().getFullYear()

  const closeMenu = () => {
    setIsOpen(false)
    setDropDownSm(false)
  }

  const toggleMenu = () => {
    setSearchOpen(false)

    setIsOpen((prev) => {
      if (prev) setDropDownSm(false)
      return !prev
    })
  }

  const toggleSearch = () => {
    closeMenu()
    setSearchOpen((prev) => !prev)
  }

  const goTo = (path: string) => {
    closeMenu()
    router.push(path)
  }

  useEffect(() => {
    if (isOpen) {
      window.scrollTo(0, 0)
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.removeProperty("overflow")
    }

    return () => {
      document.body.style.removeProperty("overflow")
    }
  }, [isOpen])

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu()
        setSearchOpen(false)
      }
    }

    document.addEventListener("keydown", handleEscape)

    return () => {
      document.removeEventListener("keydown", handleEscape)
    }
  }, [])

  useEffect(() => {
    closeMenu()
    setSearchOpen(false)
  }, [pathname])

  return (
    <div
      className={`${
        isOpen ? "z-[99999999]" : "z-1"
      } navSm-content block md:hidden absolute h-screen top-0 bottom-0 left-0 right-0`}
      aria-label="mobile navigation"
      role="navigation"
    >
      <div className="flex flex-col h-full gap-0 m-0 p-0">
        <div className="header-navSM backdrop-blur-[40px] w-full transition-all duration-300">
          <div
            className={`header-wrapper-navSM bg-black/80 py-6 px-5 flex justify-between w-full m-0 relative ${
              !isSearchOpen ? "overflow-hidden" : ""
            }`}
          >
            <section
              className={`search-modal absolute top-full left-0 right-0 min-h-screen transition-all duration-300 ${
                isSearchOpen
                  ? "pointer-events-auto visible bg-black/95"
                  : "pointer-events-none invisible"
              }`}
            >
              <div className="search-container w-[85%] mx-auto py-5">
                <div
                  className={`wrapper-search-input relative backdrop-blur-2xl rounded-full bg-white/5 border border-white/10 transition-all duration-300 ${
                    isSearchOpen
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 -translate-y-2"
                  }`}
                >
                  <input
                    type="text"
                    placeholder="What are you looking for?"
                    className="w-full p-[0.65rem] ml-4 rounded-full bg-transparent outline-0 text-white placeholder-white/80"
                  />

                  <button
                    type="button"
                    aria-label="Close search"
                    onClick={() => setSearchOpen(false)}
                    className="absolute right-4 top-1/2 -translate-y-1/2"
                  >
                    <FontAwesomeIcon
                      icon={faClose}
                      className="text-white/40 cursor-pointer text-md"
                    />
                  </button>
                </div>
              </div>
            </section>

            <div className="navbar-brand w-fit">
              <Link href="/" className="cursor-pointer brand" aria-label="logo">
                <h1 className="brand">{appName}</h1>
              </Link>
            </div>

            <div className="flex gap-1 my-auto">
              <button
                type="button"
                aria-label="Open search"
                className="h-fit my-auto p-3 cursor-pointer transition-all duration-300 rounded-full hover:bg-white/10 active:bg-white/90"
                onClick={toggleSearch}
              >
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  className="text-white/80 text-lg"
                />
              </button>

              <div className="hamburger p-2 my-auto w-fit h-fit md:hidden">
                <Hamburger
                  ariaExpanded={isOpen}
                  ariaControls="navSM"
                  isChecked={isOpen}
                  onClick={toggleMenu}
                />
              </div>
            </div>
          </div>
        </div>

        <div className={`slide-container h-full relative ${isSearchOpen ? "-z-10" : ""}`}>
          <div className="slide-animate-container absolute top-0 right-0 left-0 bottom-0">
            <div
              className={`slide-wrapper backdrop-blur-[40px] h-full w-2/3 transform transition-transform duration-300 ease-in-out ${
                dropDownSM ? "hidden" : "block"
              } ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
            >
              <nav className="bg-black/70 h-full relative z-50">
                <ul
                  id="navSM"
                  className="nav-links absolute inset-0 flex flex-col gap-[1rem] mx-2 mt-6"
                >
                  {menuLinks.map((link) => {
                    const hasSubmenu = link.ref !== ""

                    if (!hasSubmenu) {
                      return (
                        <li
                          onClick={() => goTo(link.path)}
                          className={`w-full! py-3 px-4! relative! ${
                            pathname === link.path
                              ? "bg-amber-400/20 rounded-xl flex justify-between items-center"
                              : ""
                          }`}
                          key={link.path}
                        >
                          <Link
                            href={link.path}
                            aria-label={link.name}
                            aria-current={pathname === link.path ? "page" : undefined}
                            tabIndex={isOpen ? 0 : -1}
                            className={`linkSM nav-text text-xl! ${
                              pathname === link.path ? "text-amber-400!" : ""
                            }`}
                          >
                            {link.name}
                          </Link>

                          {pathname === link.path && (
                            <FontAwesomeIcon
                              className="text-amber-400 text-xl"
                              icon={faCaretRight}
                            />
                          )}
                        </li>
                      )
                    }

                    return (
                      <li key={link.path}>
                        <button
                          tabIndex={isOpen ? 0 : -1}
                          aria-label={link.name}
                          aria-current={pathname === link.path ? "page" : undefined}
                          aria-haspopup="menu"
                          onClick={() => {
                            setDropDownSm(true)
                            setGetRef(link.ref)
                          }}
                          aria-expanded={dropDownSM}
                          aria-controls="ul-sm-child-btn-component"
                          type="button"
                          className="w-full nav-text p-2 px-4 text-xl! flex justify-between"
                        >
                          <span>{link.name}</span>
                          <FontAwesomeIcon className="text-xl my-auto" icon={faCaretRight} />
                        </button>
                      </li>
                    )
                  })}

                  <li>
                    <div className="mt-4">
                      <p className="text-sm text-gray-400">
                        &#169; {date} {appName}. All rights reserved.
                      </p>
                    </div>
                  </li>
                </ul>
              </nav>
            </div>

            <div
              aria-hidden={!dropDownSM}
              className={`slide-wrapper-nav-child flex flex-col absolute inset-0 backdrop-blur-[40px] z-50 bg-black/70 h-full w-2/3 transform transition-transform duration-300 ease-in-out ${
                dropDownSM ? "translate-x-0" : "-translate-x-full"
              }`}
            >
              <div className="btn-back block px-2 w-full">
                <div className="m-2 my-4">
                  <button
                    type="button"
                    aria-label="Back to main menu"
                    onClick={() => setDropDownSm(false)}
                    className="btn-back-text bg-amber-400/40! w-full p-2 text-start rounded-xl"
                  >
                    <FontAwesomeIcon
                      className="text-xl text-amber-400/80"
                      icon={faCaretLeft}
                    />
                    <span className="nav-text">Main Menu</span>
                  </button>
                </div>
              </div>

              <div className="subnav-container h-full relative">
                <ul
                  id="ul-sm-child-btn-component"
                  className="nav-links overflow-y-scroll absolute! inset-0 flex flex-col gap-[1rem] mx-2!"
                >
                  {fetchLinks(getRef).map((subLink) => (
                    <li
                      onClick={() => goTo(subLink.path)}
                      className={`w-full! py-3 px-4! relative! ${
                        pathname === subLink.path
                          ? "bg-amber-400/20 rounded-xl flex justify-between items-center"
                          : ""
                      }`}
                      key={subLink.path}
                    >
                      <Link
                        href={subLink.path}
                        tabIndex={isOpen ? 0 : -1}
                        aria-label={subLink.name}
                        aria-current={pathname === subLink.path ? "page" : undefined}
                        className={`linkSM nav-text text-xl! block w-full ${
                          pathname === subLink.path ? "text-amber-400!" : ""
                        }`}
                      >
                        {subLink.name}
                      </Link>

                      {pathname === subLink.path && (
                        <FontAwesomeIcon
                          className="text-amber-400 text-xl"
                          icon={faCaretRight}
                        />
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileNav
