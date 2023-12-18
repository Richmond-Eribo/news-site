import Footer from "@components/Footer"
import Header from "@components/Header"
import Navigation from "@components/Navigation"
import "../styles/index.css"
import ScrollToTop from "@components/scroll-to-top"
import Script from "next/script"
import Gtag from "@components/gtag"
import type {Metadata} from "next"
import {Analytics} from "@vercel/analytics/react"
import {SpeedInsights} from "@vercel/speed-insights/next"

// Add
export const revalidate = 60

export const metadata: Metadata = {
  metadataBase: new URL("https://naijametronews.com"),
  title: "Naija Metro News",
  description:
    "Naija Metro is a Nigerian based news publishing website covering areas like Latest news, Business, Education, Breaking News,  Politics, Entertainment and Sports.",
  openGraph: {
    title: "Naija Metro News",
    description:
      "Naija Metro is a Nigerian based news publishing website covering areas like Latest news, Business, Education, Breaking News,  Politics, Entertainment and Sports.",
    url: "https://naijametronews.com",
    siteName: "Naija Metro News",
    images: [
      {
        url: "/thenewssite.jpeg",
        width: 800,
        height: 600,
      },
    ],
    locale: "en-US",
    type: "website",
  },
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  // Gtag

  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css"
        />

        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3465737015534563"
          crossOrigin="anonymous"
          strategy="lazyOnload"
        />

        <meta property="og:image" content="/thenewssite.jpeg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff"></meta>
      </head>
      <body>
        <Gtag>
          <div className="mx-auto ">
            <Header />
            <Navigation />
            {children}
            {/* <ScrollToTop /> */}
            <Footer />
          </div>
        </Gtag>

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
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
