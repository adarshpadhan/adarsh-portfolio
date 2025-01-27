export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Adarsh Kumar Padhan",
    url: "https://adarshkumarpadhan.vercel.app",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-FOCu9NLcXLgEGbBhyOUk6xK1Ksa2Gj.png",
    sameAs: [
      "https://github.com/adarshpadhan",
      "https://instagram.com/adarshpadhan",
      "https://discord.com/users/adarsh2006",
    ],
    jobTitle: "Web Developer",
    description:
      "Web developer learning and building for the future. Specializing in web development and computer networks.",
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
}

