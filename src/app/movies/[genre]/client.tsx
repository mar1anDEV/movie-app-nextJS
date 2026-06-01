"use client"
import React from 'react'
import { usePathname } from 'next/navigation'
function client() {
    const pathname = usePathname()
  return (
    <div>{pathname}</div>
  )
}

export default client