"use client"
import React from 'react'
import { usePathname } from 'next/navigation'
function MoviesPage() {
  const pathname = usePathname().split("/")[2]
  return (
    <div className='min-h-screen flex justify-center items-center text-white'>{pathname}</div>
  )
}

export default MoviesPage