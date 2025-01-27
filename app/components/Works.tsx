"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";

const projects = [
  {
    title: "Portfolio Website",
    description: "Personal portfolio built with Next.js and Tailwind CSS",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Network Project",
    description: "A computer networks simulation project",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Web App",
    description: "A responsive web application",
    image: "/placeholder.svg?height=300&width=400",
  },
];

export default function Works() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (scrollRef.current) {
        e.preventDefault();
        scrollRef.current.scrollLeft += e.deltaY;
      }
    };

    const currentRef = scrollRef.current;
    if (currentRef) {
      currentRef.addEventListener("wheel", handleWheel, { passive: false });
    }

    return () => {
      if (currentRef) {
        currentRef.removeEventListener("wheel", handleWheel);
      }
    };
  }, []);

  return (
    <section id="works" className="relative">
      <div className="space-y-12">
        <div className="inline-flex items-center space-x-2 text-[#2DD4BF] bg-[#2DD4BF]/10 px-4 py-2 rounded-full">
          <span className="w-2 h-2 bg-[#2DD4BF] rounded-full"></span>
          <span className="text-sm font-medium">Works</span>
        </div>
        <div
          ref={scrollRef}
          className="flex overflow-x-auto space-x-6 pb-4 scrollbar-hide"
          style={{ scrollSnapType: "x mandatory", scrollBehavior: "smooth" }}
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex-none w-[300px] bg-gray-900/50 rounded-xl border border-gray-800 overflow-hidden glow"
              style={{ scrollSnapAlign: "start" }}
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
          <div className="flex-none w-[100px] bg-gray-900/50 rounded-xl border border-gray-800 overflow-hidden glow flex items-center justify-center">
            <span className="text-[#2DD4BF] text-lg">More →</span>
          </div>
        </div>
      </div>
    </section>
  );
}
