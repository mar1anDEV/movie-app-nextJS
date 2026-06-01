'use client'
import Image from 'next/image'
import { useRef, useEffect,useState } from 'react'
import Hls from 'hls.js'

interface VideoPlayerProps {
  src: string
  muted?: boolean
  autoPlay?: boolean
  loop?: boolean,
  backgroundImage?: string
}

export default function VideoPlayer({ src, muted = false, autoPlay = true, loop = true, backgroundImage }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [imageBackup, setImageBackup] = useState(false)
  useEffect(() => {
    const video = videoRef.current
    if(videoRef.current === null){
      setImageBackup(true)
    }
    if (!video) return

    if (Hls.isSupported()) {
      const hls = new Hls()
      hls.loadSource(src)
      hls.attachMedia(video)
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        hls.currentLevel = hls.levels.length - 1
        if (autoPlay) video.play().catch(console.error)
      })
      return () => hls.destroy()
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = src
      
    }
  }, [src, autoPlay])

  return (
    <div>
      <video
      ref={videoRef}
      className="absolute w-full h-full inset-0 object-cover object-center"
      muted={muted}
      loop={loop}
      aria-hidden="true"
      playsInline
    
    />
    {imageBackup && (
      <div className="absolute inset-0">
        <Image src={backgroundImage ?? ''} alt="Background" fill className="object-cover object-center" priority loading='eager' />
      </div>
    )}
    </div>
    
  )
}