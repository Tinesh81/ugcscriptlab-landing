import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'UGCScriptLab - Scientific UGC Script Generation',
  description: 'The scientific approach to UGC script generation. Tested on 500+ viral campaigns with 1M+ views. Generate production-ready scripts in 2 minutes.',
  keywords: ['UGC', 'script generator', 'AI', 'content creation', 'viral hooks', 'social media', 'lab tested', 'data driven'],
  authors: [{ name: 'UGCScriptLab Team' }],
  creator: 'UGCScriptLab',
  publisher: 'UGCScriptLab',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://ugcscriptlab.co'),
  openGraph: {
    title: 'UGCScriptLab - Scientific UGC Script Generation',
    description: 'The scientific approach to UGC script generation. Tested on 500+ viral campaigns with 1M+ views. Generate production-ready scripts in 2 minutes.',
    url: 'https://ugcscriptlab.co',
    siteName: 'UGCScriptLab',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'UGCScriptLab - Scientific UGC Script Generation',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UGCScriptLab - Scientific UGC Script Generation',
    description: 'The scientific approach to UGC script generation. Tested on 500+ viral campaigns with 1M+ views. Generate production-ready scripts in 2 minutes.',
    images: ['/og-image.png'],
    creator: '@ugcscriptlab',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
