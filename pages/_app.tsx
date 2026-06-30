import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Script from "next/script";
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-DV9H87WQSY"
        strategy="afterInteractive"
      />

      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-DV9H87WQSY');
        `}
      </Script>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}