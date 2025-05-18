import type { Metadata } from "next"
import { Inter, Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "CommerciCore - Master Data Management for E-commerce",
  description:
    "Streamline your product data management across multiple suppliers with our intelligent MDM platform tailored for e-commerce businesses.",
  keywords:
    "master data management, product data, e-commerce, MDM, data synchronization, product matching",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
