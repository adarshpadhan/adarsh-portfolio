import { Mail } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#2DD4BF] mb-8">Get in Touch</h2>
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-center mb-8">
            <Mail className="h-6 w-6 text-[#2DD4BF] mr-2" />
            <a href="mailto:apadhan@outlook.in" className="text-gray-300 hover:text-[#2DD4BF] transition-colors">
              apadhan@outlook.in
            </a>
          </div>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-300 font-semibold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2DD4BF] text-gray-300"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-300 font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2DD4BF] text-gray-300"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-300 font-semibold mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2DD4BF] text-gray-300"
                required
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-[#2DD4BF] text-gray-900 px-6 py-3 rounded-md text-lg font-semibold hover:bg-[#2DD4BF]/90 transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

