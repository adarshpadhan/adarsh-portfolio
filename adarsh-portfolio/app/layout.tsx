import "./globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Adarsh Kumar Padhan - Developer Portfolio",
  description: "Portfolio of Adarsh Kumar Padhan, a web developer learning and building for the future.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-[#1a1a1a] text-gray-100`}>{children}</body>
    </html>
  )
}

