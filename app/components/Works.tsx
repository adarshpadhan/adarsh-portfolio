import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const projects = [
  {
    title: "Portfolio Website",
    description: "Personal portfolio built with Next.js and Tailwind CSS",
    image: "/adarsh_portfolio.png?height=300&width=400",
  },
  {
    title: "Virtual Private Cloud",
    description: "Leaveraging AWS services to create a secure compute environment",
    image: "/AWS.png?height=300&width=400",
  },
]

export default function Works() {
  return (
    <section id="works" className="relative">
      <div className="space-y-12">
        <div className="inline-flex items-center space-x-2 text-[#2DD4BF] bg-[#2DD4BF]/10 px-4 py-2 rounded-full">
          <span className="w-2 h-2 bg-[#2DD4BF] rounded-full"></span>
          <span className="text-sm font-medium">Works</span>
        </div>
        <div className="relative">
          <div className="flex overflow-x-auto space-x-6 pb-4 scrollbar-hide">
            {projects.map((project, index) => (
              <div
                key={index}
                className="flex-none w-[300px] bg-gray-900/50 rounded-xl border border-gray-800 overflow-hidden glow"
              >
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={300}
                  height={200}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-400 text-sm">{project.description}</p>
                  <a href="#" className="inline-block mt-4 text-[#2DD4BF] text-sm hover:underline">
                    View Details →
                  </a>
                </div>
              </div>
            ))}
          </div>
          <button className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-gray-900/50 p-2 rounded-full border border-gray-800 text-[#2DD4BF] hover:bg-gray-800 transition-colors">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-gray-900/50 p-2 rounded-full border border-gray-800 text-[#2DD4BF] hover:bg-gray-800 transition-colors">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  )
}

