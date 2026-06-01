'use client'

import { useState, useEffect } from 'react'

interface breakPointProp {
  pixels: number
}

function useMobile({ pixels }: breakPointProp) {


  const [isMobile, setIsMobile] = useState(false) 

  useEffect(() => {
    
    setIsMobile(window.innerWidth < pixels)
    
    const handleResize = () => {
      setIsMobile(window.innerWidth < pixels)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [pixels])

  return isMobile
}

export default useMobile