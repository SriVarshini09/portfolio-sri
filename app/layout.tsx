import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Tulasi Venkata Sri Varshini Padamata | ML Engineer & AI Specialist',
  description: 'Machine Learning Engineer specializing in scalable AI systems, production MLOps, and document intelligence solutions. Expert in LLMs, computer vision, and distributed systems.',
  keywords: ['Machine Learning', 'AI', 'MLOps', 'AWS', 'Deep Learning', 'NLP', 'Computer Vision'],
  authors: [{ name: 'Tulasi Venkata Sri Varshini Padamata' }],
  openGraph: {
    title: 'Tulasi Venkata Sri Varshini Padamata | ML Engineer',
    description: 'Machine Learning Engineer specializing in scalable AI systems and production MLOps',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-dark-950 text-dark-50`}>
        {children}
      </body>
    </html>
  )
}
