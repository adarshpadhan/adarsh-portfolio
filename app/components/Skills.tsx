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
    description: "Decentralized, IP Protocols",
  },
]

export default function Skills() {
  return (
    <section id="skills" className="relative">
      <div className="space-y-12">
        <div className="inline-flex items-center space-x-2 text-[#2DD4BF] bg-[#2DD4BF]/10 px-4 py-2 rounded-full">
          <span className="w-2 h-2 bg-[#2DD4BF] rounded-full"></span>
          <span className="text-sm font-medium">My Skills</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 glow">
              <div className="flex items-center space-x-4">
                <div className="bg-[#2DD4BF]/10 p-3 rounded-lg">{skill.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">{skill.title}</h3>
                  <p className="text-gray-400 text-sm">{skill.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

