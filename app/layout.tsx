import Footer from "@components/Footer"
import Header from "@components/Header"
import Navigation from "@components/Navigation"
import "../styles/index.css"
import ScrollToTop from "@components/scroll-to-top"
import Script from "next/script"
import Gtag from "@components/gtag"
import type {Metadata} from "next"

// Add
export const revalidate = 60

export const metadata: Metadata = {
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
      </body>
    </html>
  )
}
