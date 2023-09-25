import './globals.css'
import type { Metadata } from 'next'

import Header from 'components/Header';
import Footer from 'components/Footer/index';
import Analytics from 'components/Analytics';

//firebase
// import { getFirebaseApp } from './firebase'
// const app = getFirebaseApp();

//font
import { Outfit } from 'next/font/google'

//analytics
// import GoogleAnalytics from './GoogleAnalytics.tsx';


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
      {/* {isProduction && ( */}
        {/* <GoogleAnalytics/> */}
      {/* )} */}
      <Analytics />
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
