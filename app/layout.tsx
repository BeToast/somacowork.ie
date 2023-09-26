import './globals.css'

import type { Metadata } from 'next'

import Header from 'components/Header';
import Footer from 'components/Footer/index';
// import Gtag from 'components/Gtag';
import GtagScriptInit from 'components/Gtag/GtagScriptInit';

//firebase
// import { getFirebaseApp } from './firebase'
// const app = getFirebaseApp();

//font
import { Outfit } from 'next/font/google'
import Script from 'next/script';
import measurementId from './lib/ga/measurementId';
const outfit = Outfit({ subsets: ['latin'] });


export const metadata: Metadata = {
  title: 'soma',
  description: 'Soma coworking in Moycullen, Galway',
}

//is production?????????????? sheeeesssshhhh!!
const isProduction = process.env.NODE_ENV === "production";


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
        <GtagScriptInit />
      </body>
    </html>
  )
}
