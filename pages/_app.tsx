import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Script from "next/script";
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        src="https://chatbot-widjet.vercel.app/embed.js"
        strategy="afterInteractive"
      />

      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}