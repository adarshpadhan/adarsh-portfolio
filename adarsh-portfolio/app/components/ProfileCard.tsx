import Image from "next/image"

export default function ProfileCard() {
  return (
    <div className="relative w-full max-w-sm mx-auto">
      <div className="float rounded-2xl bg-gray-900/50 border border-gray-800 p-6 glow">
        <div className="flex items-center space-x-4 mb-6">
          <Image
            src="/placeholder.svg?height=80&width=80"
            alt="Adarsh Kumar Padhan"
            width={80}
            height={80}
            className="rounded-full border-2 border-[#2DD4BF]"
          />
          <div>
            <h2 className="text-lg font-semibold">Adarsh Kumar Padhan</h2>
            <p className="text-gray-400">Web Developer</p>
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 bg-[#2DD4BF] rounded-full"></span>
            <span className="w-2 h-2 bg-[#2DD4BF] rounded-full"></span>
            <span className="w-2 h-2 bg-[#2DD4BF] rounded-full"></span>
          </div>
          <p className="text-gray-400 text-sm">
            Learning and building for the web. Passionate about computer networks and modern web technologies.
          </p>
        </div>
      </div>
    </div>
  )
}

