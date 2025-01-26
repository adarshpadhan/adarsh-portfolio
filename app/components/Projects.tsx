import Image from "next/image"

const projects = [
  {
    title: "Personal Blog",
    description: "A responsive blog built with Next.js and Markdown",
    image: "/placeholder.svg?height=200&width=300",
    link: "https://github.com/adarshkumarpadhan",
  },
  {
    title: "Network Simulator",
    description: "A simple network simulator built with Python",
    image: "/placeholder.svg?height=200&width=300",
    link: "https://github.com/adarshkumarpadhan",
  },
  {
    title: "Weather App",
    description: "A weather application using OpenWeatherMap API",
    image: "/placeholder.svg?height=200&width=300",
    link: "https://github.com/adarshkumarpadhan",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 transition duration-300"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

