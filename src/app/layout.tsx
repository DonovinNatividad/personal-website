import type { Metadata } from 'next'
import {Roboto_Mono, } from 'next/font/google'
import './globals.css'

const roboto_mono = Roboto_Mono({ subsets: ['latin'] })
// const another_font = Another_Font({ subsets: ['latin'] }) // Add this line

export const metadata: Metadata = {
  title: "Donovin's Personal Website",
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='roboto_mono.class'> 
      <body className={`${roboto_mono.className}`}>{children}</body>
    </html>
  )
}