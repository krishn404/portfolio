'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'
import GitHubCalendar from 'react-github-calendar'
import { SpotifyCard } from './spotify-card'

interface HeaderProps {
  className?: string
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
        setProfilePic('/default-profile.jpg')
      }
    }

    fetchProfilePic()
  }, [])

  return (
    <header
      className={`min-h-screen max-w-7xl mx-auto px-6 py-12 mt-20 ${className}`}
    >
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

        .masonry-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          grid-auto-rows: minmax(min-content, max-content);
          gap: 2rem;
          align-items: start;
        }

        @media (min-width: 1024px) {
          .masonry-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>

      <div className="flex flex-col gap-8">
        {/* Top Section with Profile and Spotify */}
        <div className="masonry-grid">
          {/* Profile Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-black/20 backdrop-blur-lg rounded-2xl p-8 border border-white/10 h-[400px] flex flex-col justify-center"
          >
            <div className="flex flex-col items-center gap-6">
              {profilePic && (
                <div className="relative">
                  <Image
                    src={profilePic}
                    alt="Krishna Kant"
                    width={180}
                    height={180}
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
              <div className="text-center">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-4xl md:text-5xl font-bold mb-2"
                >
                  Krishna Kant
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="text-xl md:text-2xl text-gray-300"
                >
                  Front end Developer & AI Enthusiast
                </motion.p>
              </div>
            </div>
          </motion.div>

          {/* Spotify Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden md:block bg-black/20 backdrop-blur-lg rounded-2xl p-8 border border-white/10 h-[400px] flex flex-col justify-center"
          >
            <SpotifyCard />
          </motion.div>
        </div>

        {/* GitHub Calendar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="hidden md:block bg-black/20 backdrop-blur-lg rounded-2xl p-8 border border-white/10"
        >
          <GitHubCalendar
            username="krishn404"
            blockSize={12}
            blockMargin={4}
            fontSize={14}
            style={{
              color: '#ffffff',
              width: '100%',
              height: 'auto',
            }}
          />
        </motion.div>

        {/* Availability & Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center gap-6 justify-between"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 backdrop-blur-sm bg-black/20">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
            </span>
            <span className="text-sm font-mono">Available for Freelance Work</span>
          </div>
          
          <div className="flex gap-4">
            {[
              {
                icon: <Github className="w-6 h-6" />,
                href: 'https://github.com/krishn404',
              },
              {
                icon: <Linkedin className="w-6 h-6" />,
                href: 'https://www.linkedin.com/in/krishn404/',
              },
              {
                icon: <Mail className="w-6 h-6" />,
                href: 'mailto:maharshikrishnakant@gmail.com',
              },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors p-3 hover:bg-purple-500/20 rounded-full bg-black/20 backdrop-blur-sm border border-white/10"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </header>
  )
}
