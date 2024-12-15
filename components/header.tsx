'use client'

import { Github, Linkedin } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

interface HeaderProps {
  className?: string;
}

export function Header({ className }: HeaderProps) {
  const [profilePic, setProfilePic] = useState<string | null>(null)

  useEffect(() => {
    // Fetch GitHub profile data to get the avatar URL
    const fetchProfilePic = async () => {
      const res = await fetch('https://api.github.com/users/krishn404')
      const data = await res.json()
      setProfilePic(data.avatar_url)
    }

    fetchProfilePic()
  }, [])

  return (
    <header className={`flex items-center justify-between max-w-2xl mx-auto p-6 ${className}`}>
      <div className="flex items-center gap-4">
        <div className="relative w-12 h-12 rounded-full overflow-hidden">
          {/* Display the fetched profile picture */}
          {profilePic && (
            <Image
              src={profilePic}
              alt="Krishna Kant"
              fill
              className="object-cover"
            />
          )}
        </div>
        <div>
          <h1 className="text-xl font-semibold">
            Krishna Kant
          </h1>
          <a href="mailto:maharshikrishnakant@gmail.com" className="text-sm text-gray-400 hover:text-white transition-colors">Email Me</a>
        </div>
      </div>
      <div className="flex gap-4">
        <Link href="https://linkedin.com/in/krishn404" className="text-gray-400 hover:text-white transition-colors">
          <Linkedin className="w-5 h-5" />
        </Link>
        <Link href="https://github.com/krishn404" className="text-gray-400 hover:text-white transition-colors">
          <Github className="w-5 h-5" />
        </Link>
      </div>
    </header>
  )
}
