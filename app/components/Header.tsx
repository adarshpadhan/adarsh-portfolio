import Link from "next/link"

export default function Header() {
  return (
    <header className="bg-gray-800 text-white">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          Adarsh Kumar Padhan
        </Link>
        <div className="space-x-4">
          <Link href="#about" className="hover:text-gray-300">
            About
          </Link>
          <Link href="#skills" className="hover:text-gray-300">
            Skills
          </Link>
          <Link href="#projects" className="hover:text-gray-300">
            Projects
          </Link>
          <Link href="#contact" className="hover:text-gray-300">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  )
}

