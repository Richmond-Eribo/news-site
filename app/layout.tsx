import Footer from '@components/Footer'
import Header from '@components/Header'
import Navigation from '@components/Navigation'
import '../styles/index.css'

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang='en'>
      <head />

      <body>
        <div className='container   mx-auto'>
          <Header />
          <Navigation />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
