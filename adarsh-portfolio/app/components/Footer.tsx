export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-gray-400 py-8 mt-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Adarsh Kumar Padhan. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <a href="#" className="hover:text-[#2DD4BF] transition-colors">
              Privacy Policy
            </a>
            <span className="mx-2">|</span>
            <a href="#" className="hover:text-[#2DD4BF] transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

