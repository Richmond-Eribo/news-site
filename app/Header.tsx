import Image from 'next/image'
import logo from '../public/logo.jpg'

const Header = () => {
  return (
    <header className='flex items-center py-1  justify-between'>
      <div>
        <Image src={logo} alt='logo' />
      </div>
      <div
        className='bg-gray-100 h-24 text-zinc-400
       max-w-2xl flex-1 text-3xl text-center'
      >
        ADS
      </div>
    </header>
  )
}
export default Header
