import Link from "next/link"
import { Github, Instagram, MessageCircle } from "lucide-react"

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1a1a1a]/80 backdrop-blur-sm border-b border-gray-800">
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-[#2DD4BF] font-semibold text-xl">
            <span className="text-gray-400">&lt;</span>
            Adarsh
            <span className="text-gray-400">/&gt;</span>
          </Link>
          <div className="flex items-center space-x-8">
            <div className="hidden md:flex space-x-6">
              <Link href="#about" className="text-gray-400 hover:text-[#2DD4BF] transition-colors">
                About
              </Link>
              <Link href="#skills" className="text-gray-400 hover:text-[#2DD4BF] transition-colors">
                Skills
              </Link>
              <Link href="#works" className="text-gray-400 hover:text-[#2DD4BF] transition-colors">
                Works
              </Link>
              <Link href="#contact" className="text-gray-400 hover:text-[#2DD4BF] transition-colors">
                Contact
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <a
                href="https://github.com/adarshpadhan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#2DD4BF] transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com/adarshpadhan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#2DD4BF] transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://discord.com/users/adarsh2006"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#2DD4BF] transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

