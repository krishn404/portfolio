'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail} from 'lucide-react'
import GitHubCalendar from 'react-github-calendar'

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

  useEffect(() => {
    const handleScroll = () => {
      // setScrollY(window.scrollY)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`flex flex-col items-center justify-center min-h-screen max-w-4xl mx-auto px-6 text-center ${className}`}>
      <style jsx>{`
        @keyframes pulse {
          0% {
            transform: scale(1);
            opacity: 0.4;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.7;
          }
          100% {
            transform: scale(1);
            opacity: 0.4;
          }
        }
      `}</style>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-8"
      >
        {profilePic && (
          <div className="relative">
            <Image
              src={profilePic}
              alt="Krishna Kant"
              width={150}
              height={150}
              className="rounded-full border-4 border-blue-500 relative z-10"
            />
            <div 
              className="absolute inset-0 rounded-full border-4 border-blue-500"
              style={{
                animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                boxShadow: '0 0 15px rgba(66, 153, 225, 0.5)',
              }}
            ></div>
          </div>
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
        Front end Developer & AI Enthusiast
      </motion.p>

      <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 1 }}
  className="mt-8"
>
  <GitHubCalendar 
    username="krishn404" 
    blockSize={13}
    blockMargin={3}
    fontSize={16}
    style={{
      borderRadius: '12px',
      background: 'rgba(255, 255, 255, 0.10)', 
      backdropFilter: 'blur(10px)', 
      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)', 
      border: '1px solid rgba(255, 255, 255, 0.2)', 
      color: '#ffffff', 
      padding: '20px',
      overflow: 'hidden',
    }}
  />
</motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="flex items-center gap-4 mt-8 justify-center"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 backdrop-blur-sm">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
          </span>
          <span className="text-sm font-mono">Available for Freelance Work</span>
        </div>
        {[
          { icon: <Github className="w-6 h-6" />, href: "https://github.com/krishn404" },
          { icon: <Linkedin className="w-6 h-6" />, href: "https://www.linkedin.com/in/krishn404/" },
          { icon: <Mail className="w-6 h-6" />, href: "mailto:maharshikrishnakant@gmail.com" },
        ].map((social, index) => (
          <motion.a
            key={index}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-white transition-colors p-2 hover:bg-purple-500/20 rounded-full"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {social.icon}
          </motion.a>
        ))}
      </motion.div>
    </header>
  )
}

