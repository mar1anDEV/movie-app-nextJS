import type { Metadata } from "next"
import { Outfit, Oswald } from "next/font/google"
import Footer from "@/components/footer/Footer"
import Providers from "@/context/Providers"
import Navbar from "@/components/navigation/navbar"

import "@/styles/globals.css"

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
})

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
})

export const metadata: Metadata = {
  title: "MovieApp",
  description: "Discover the ultimate movie experience",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${oswald.variable}`}
    >
      <body className="font-sans">
        <main id="main_app" className="min-h-screen">
          <Navbar />

          <Providers>
            {children}
          </Providers>
          <Footer />
        </main>
      </body>
    </html>
  )
}