import Image from "next/image"
import logo from "../public/logo.jpg"
import AdCode from "./googleAds/googleAds"

const Header = () => {
  return (
    <header className="flex flex-col items-center my-2  justify-between">
      {/* <div>
        <Image src={logo} alt='logo' />
      </div> */}

      <div
        className="bg-gray-100 h-32 py-16 text-zinc-400
       w-full flex-1 text-sm text-center"
      >
        {/* vertical ad */}
        <AdCode code="2702578207" />
      </div>
      {/* <p className="bg-red-500 text-xs text-center mx-auto text-white font-medium tracking-wider py-2 w-11/12 lg:w-1/3   rounded-lg ">
        This is a demo. No article should be atributed to TheNews.
      </p> */}
    </header>
  )
}
export default Header
