import Footer from "@components/Footer"
import Header from "@components/Header"
import Navigation from "@components/Navigation"
import ScrollToTop from "@components/scroll-to-top"
import "../styles/index.css"

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css"
        />
      </head>
      <body>
        <div className=" mx-auto ">
          <Header />
          <Navigation />
          {children}
          {/* <ScrollToTop /> */}
          <Footer />
        </div>
      </body>
    </html>
  )
}
