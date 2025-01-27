import Navbar from "./components/Navbar"
import ProfileCard from "./components/ProfileCard"
import About from "./components/About"
import Skills from "./components/Skills"
import Works from "./components/Works"
import Footer from "./components/Footer"
import StructuredData from "./components/StructuredData"

export default function Home() {
  return (
    <>
      <StructuredData />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 pt-24 pb-8">
          <div className="max-w-6xl mx-auto space-y-24">
            <section className="flex flex-col lg:flex-row items-center justify-between gap-12 mt-8">
              <div className="lg:w-1/2 space-y-6">
                <h1 className="text-5xl font-bold tracking-tight">
                  <span className="text-gray-400">Hey</span>
                  <br />
                  I'm Adarsh,
                  <br />
                  <span className="text-[#2DD4BF]">Developer</span>
                </h1>
                <p className="text-gray-400 text-lg">Learning Web Development and Computer Networks</p>
              </div>
              <div className="lg:w-1/2">
                <ProfileCard />
              </div>
            </section>
            <About />
            <Skills />
            <Works />
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}

