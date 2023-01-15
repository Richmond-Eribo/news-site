import Footer from './Footer'
import '../styles/index.css'
import Header from './Header'
import Navigation from './Navigation'

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
