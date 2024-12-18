import { Github, Linkedin } from 'lucide-react'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-[#0A0A0A] py-6 border-t border-gray-800/50">
      <div className="max-w-2xl mx-auto px-6 flex justify-between items-center">
        <p className="text-sm text-gray-400">© 2023 Krishna Kant. All rights reserved.</p>
        <div className="flex gap-4">
          <Link 
            href="https://linkedin.com/in/krishn404" 
            className="text-gray-400 hover:text-white transition-colors p-2 rounded-md hover:bg-white/5"
          >
            <Linkedin className="w-5 h-5" />
          </Link>
          <Link 
            href="https://github.com/krishn404" 
            className="text-gray-400 hover:text-white transition-colors p-2 rounded-md hover:bg-white/5"
          >
            <Github className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </footer>
  )
}

