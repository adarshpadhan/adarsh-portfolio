import { Github, Instagram, MessageSquare, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-gray-400 py-8 mt-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Adarsh Kumar Padhan. All rights reserved.</p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <a
              href="https://github.com/adarshpadhan"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#2DD4BF] transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://instagram.com/adarshpadhan"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#2DD4BF] transition-colors"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="https://discord.com/users/adarsh2006"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#2DD4BF] transition-colors"
            >
              <MessageSquare className="h-5 w-5" />
            </a>
            <a href="mailto:apadhan@outlook.in" className="hover:text-[#2DD4BF] transition-colors">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

