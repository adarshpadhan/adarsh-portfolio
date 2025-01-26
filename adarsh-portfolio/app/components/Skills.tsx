import { Code, Server, Globe, Database, Terminal, Cpu } from "lucide-react"

const skills = [
  {
    icon: <Code className="h-8 w-8 text-[#2DD4BF]" />,
    title: "Web Development",
    description: "HTML, CSS, JavaScript",
  },
  {
    icon: <Cpu className="h-8 w-8 text-[#2DD4BF]" />,
    title: "Programming",
    description: "C, C++",
  },
  {
    icon: <Terminal className="h-8 w-8 text-[#2DD4BF]" />,
    title: "Operating Systems",
    description: "Linux",
  },
  {
    icon: <Server className="h-8 w-8 text-[#2DD4BF]" />,
    title: "Computer Networks",
    description: "TCP/IP, DNS, HTTP",
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#2DD4BF] mb-12">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="mb-4">{skill.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{skill.title}</h3>
              <p className="text-gray-400">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

