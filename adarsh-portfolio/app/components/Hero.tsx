import Image from "next/image"

export default function Hero() {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Hi, I'm Adarsh Kumar Padhan</h1>
          <p className="text-xl text-gray-600 mb-6">
            A young web developer from India, passionate about computer networks and web development.
          </p>
          <a
            href="#contact"
            className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            Get in Touch
          </a>
        </div>
        <div className="md:w-1/2">
          <Image
            src="/placeholder.svg?height=400&width=400"
            alt="Adarsh Kumar Padhan"
            width={400}
            height={400}
            className="rounded-full shadow-lg"
          />
        </div>
      </div>
    </section>
  )
}

