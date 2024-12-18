'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

interface HeaderProps {
  className?: string;
}

export function Header({ className }: HeaderProps) {
  const [profilePic, setProfilePic] = useState<string | null>(null)

  useEffect(() => {
    const fetchProfilePic = async () => {
      try {
        const res = await fetch('https://api.github.com/users/krishn404')
        const data = await res.json()
        setProfilePic(data.avatar_url)
      } catch (error) {
        console.error('Error fetching GitHub profile:', error)
        // Fallback to a default image if the fetch fails
        setProfilePic('/default-profile.jpg')
      }
    }

    fetchProfilePic()
  }, [])

  return (
    <header className={`flex flex-col items-center justify-center min-h-screen max-w-4xl mx-auto px-6 text-center ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-8"
      >
        {profilePic && (
          <Image
            src={profilePic}
            alt="Krishna Kant"
            width={150}
            height={150}
            className="rounded-full border-4 border-blue-500"
          />
        )}
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-4xl md:text-5xl font-bold mb-4"
      >
        Krishna Kant
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-xl md:text-2xl text-gray-300 mb-8"
      >
        Full-Stack Developer & AI Enthusiast
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <a
          href="mailto:maharshikrishnakant@gmail.com"
          className="bg-blue-500 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-600 transition-colors duration-300"
        >
          Get in Touch
        </a>
      </motion.div>
    </header>
  )
}

