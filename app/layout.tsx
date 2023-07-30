import './globals.css'
import type { Metadata } from 'next'

import Header from './components/Header';
import Footer from './components/Footer/index';

//firebase
import { getFirebaseApp } from './firebase'
const app = getFirebaseApp();

//font
import { Outfit } from 'next/font/google'
const outfit = Outfit({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'soma',
  description: 'Soma coworking space in Moycullen, Galway',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='scroll-smooth'>
      <head>
      </head>
      <body className={outfit.className}>
        <div className="flex flex-col min-h-screen">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
