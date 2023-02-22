import Footer from "@components/Footer"
import Header from "@components/Header"
import Navigation from "@components/Navigation"
import "../styles/index.css"
import ScrollToTop from "@components/scroll-to-top"
import Script from "next/script"
import Gtag from "@components/gtag"

export default function RootLayout({children}: {children: React.ReactNode}) {
  // Gtag

  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css"
        />
      </head>
      <body>
        <Gtag />
        <div className=" mx-auto ">
          <Header />
          <Navigation />
          {children}
          {/* <ScrollToTop /> */}
          <Footer />
        </div>

        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GTAG_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />

        <Script
          strategy="afterInteractive"
          id="gtag-init"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', ${process.env.GTAG_MEASUREMENT_ID})
            `,
          }}
        />
      </body>
    </html>
  )
}
