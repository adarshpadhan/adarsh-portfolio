export default function About() {
  return (
    <section id="about" className="relative">
      <div className="space-y-8">
        <div className="inline-flex items-center space-x-2 text-[#2DD4BF] bg-[#2DD4BF]/10 px-4 py-2 rounded-full">
          <span className="w-2 h-2 bg-[#2DD4BF] rounded-full"></span>
          <span className="text-sm font-medium">About Me</span>
        </div>
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold mb-4">Hello!</h2>
          <div className="prose prose-invert prose-gray">
            <p className="text-gray-400">
              I'm Adarsh Kumar Padhan, a young developer passionate about web development and computer networks.
              Currently focusing on expanding my knowledge in modern web technologies and networking concepts. I enjoy
              building user-friendly interfaces and learning about network architecture.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

