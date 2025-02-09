'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export function Navbar() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects']
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed w-full top-0 z-50 flex justify-center pt-6"
    >
      <div className="flex items-center px-8 py-3 rounded-full bg-[#0A0A0A]/80 backdrop-blur-md border border-gray-800/50">
        <Link 
          href="/" 
          className="text-xl font-bold bg-gradient-to-r from-blue-400 to-violet-400 text-transparent bg-clip-text mr-8"
        >
          KK
        </Link>

        <div className="flex items-center gap-8">
          {['Home', 'About', 'Skills', 'Projects'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className={`text-sm font-medium transition-colors duration-300 px-2 py-1 rounded-md ${
                activeSection === item.toLowerCase()
                  ? 'text-white bg-white/10'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </motion.nav>
  )
}
