import "./globals.css"
import { Inter } from "next/font/google"
import type { Metadata } from "next"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Adarsh Kumar Padhan - Developer Portfolio",
  description:
    "Portfolio of Adarsh Kumar Padhan, a web developer learning and building for the future. Specializing in web development and computer networks.",
  keywords: ["web developer", "computer networks", "portfolio", "Adarsh Kumar Padhan", "developer"],
  authors: [{ name: "Adarsh Kumar Padhan" }],
  creator: "Adarsh Kumar Padhan",
  publisher: "Adarsh Kumar Padhan",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://adarshkumarpadhan.vercel.app",
    title: "Adarsh Kumar Padhan - Developer Portfolio",
    description: "Portfolio of Adarsh Kumar Padhan, a web developer learning and building for the future.",
    siteName: "Adarsh Kumar Padhan Portfolio",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-FOCu9NLcXLgEGbBhyOUk6xK1Ksa2Gj.png",
        width: 1200,
        height: 630,
        alt: "Adarsh Kumar Padhan Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adarsh Kumar Padhan - Developer Portfolio",
    description: "Portfolio of Adarsh Kumar Padhan, a web developer learning and building for the future.",
    images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-FOCu9NLcXLgEGbBhyOUk6xK1Ksa2Gj.png"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16" />
        <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#2DD4BF" />
        <link rel="canonical" href="https://adarshkumarpadhan.vercel.app" />
      </head>
      <body className={`${inter.className} bg-[#1a1a1a] text-gray-100`}>{children}</body>
    </html>
  )
}

