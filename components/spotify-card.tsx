'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState, useEffect } from 'react'

const SPOTIFY_API_URL = process.env.NEXT_PUBLIC_SPOTIFY_API_URL;

export function SpotifyCard() {
  const [imageError, setImageError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  
  // Reset error state and try loading again every 30 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setImageError(false)
      setIsLoading(true)
    }, 30000)

    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.2 }}
      className="w-full max-w-[480px] mt-8"
    >
      <div className="rounded-xl bg-[#121212] border border-white/5 overflow-hidden">
        <div className="p-5">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-3 h-3 bg-[#1DB954] rounded-full" />
            <span className="text-white text-sm font-medium">Now Playing</span>
          </div>
          
          <div className="w-full h-[200px] bg-[#181818] rounded-lg mb-6 relative overflow-hidden">
            {!imageError ? (
              <Image
                src={SPOTIFY_API_URL || ''}
                alt="Spotify Now Playing"
                fill
                style={{ objectFit: 'contain' }}
                onError={() => {
                  setImageError(true)
                  setIsLoading(false)
                }}
                onLoad={() => setIsLoading(false)}
                className={`transition-opacity duration-300 ${
                  isLoading ? 'opacity-0' : 'opacity-100'
                }`}
                priority
                unoptimized
              />
            ) : null}
            
            {(isLoading || imageError) && (
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white/50 text-sm">
                  {isLoading ? 'Loading...' : 'Unable to load Spotify status'}
                </span>
              </div>
            )}
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-0.5">
              <span className="text-white/70 text-[13px]">Listening on Spotify</span>
            </div>
            <a
              href="https://open.spotify.com/user/31eq3547p3drfawz256uxy4erspy"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1.5 bg-[#1DB954] text-black text-xs font-bold rounded-full hover:bg-[#1ed760] transition-colors"
            >
              OPEN SPOTIFY
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

