import Image from "next/image"
import logo from "../public/logo.jpg"

const Header = () => {
  return (
    <header className="flex flex-col items-center   justify-between">
      {/* <div>
        <Image src={logo} alt='logo' />
      </div> */}

      <div
        className="bg-gray-100 h-32 text-zinc-400
       w-full flex-1 text-3xl text-center"
      >
        Advertisement
      </div>
      <p className="bg-black text-center text-white font-medium tracking-wider py-3 w-full ">
        <span className="w-1 h-4 translate-y-1 bg-red-700 inline-block mr-2"></span>
        <span className="font-bold">NOTE:</span> This is a demo. No article is
        atributed to TheNews.
      </p>
    </header>
  )
}
export default Header
