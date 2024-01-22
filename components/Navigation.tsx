import {NavLinks} from "@schema/data"
import Link from "next/link"
import MobileMenu from "./mobile-menu"
import Search from "./search"
import {Suspense} from "react"

// const moreNavLinks = ["videos", "opinions", "investigation"]

const Navigation = () => {
  return (
    <nav className="bg-gray-100 sticky top-0 z-[9999] border-b border-t border-red-200">
      <div className="px-3 mx-auto xl:container sm:px-4 xl:px-2">
        <div className="flex justify-between">
          <Link
            href="/"
            className="flex items-center text-2xl font-bold text-red-500 capitalize mx-w-10"
          >
            Naija Metro News
          </Link>

          <div className="flex flex-row">
            {/* <!-- nav menu --> */}
            <ul className="items-center hidden text-sm font-bold text-gray-900 navbar lg:flex lg:flex-row">
              <li className="relative border-l border-white hover:text-red-500">
                <Link
                  className="block px-6 py-3 capitalize border-b-2 border-transparent"
                  href={"/"}
                >
                  Home
                </Link>
              </li>
              {NavLinks.map((navLink: any) => (
                <li
                  key={navLink}
                  className="relative border-l border-white hover:text-red-500"
                >
                  <Link
                    className="block px-6 py-3 capitalize border-b-2 border-transparent"
                    href={`/category/${navLink}`}
                  >
                    {navLink}
                  </Link>
                </li>
              ))}
            </ul>

            {/* <!-- search form & mobile nav --> */}
            <div className="flex flex-row items-center text-gray-300">
              {/* search button it is client */}
              <Suspense fallback={<></>}>
                <Search />
              </Suspense>

              {/* Mobile Navigation */}
              <MobileMenu />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation

// An example of a link with sub links

// <li className='relative subdropdown hover:bg-gray-50'>
// <a
//   className='block px-6 py-2 border-b border-gray-100'
//   href='#'
// >
//   Pages
// </a>

{
  /* <!--dropdown submenu--> */
}
{
  /* <ul
  className='absolute right-auto z-50 ml-0 mr-0 -mt-10 text-left transform bg-white border border-b-0 border-gray-100 dropdown-menu left-full top-full'
  style={{minWidth: '12rem'}}
>
  <li className='relative hover:bg-gray-50'>
    <a
      className='block px-6 py-2 border-b border-gray-100'
      href='#'
    >
      404
    </a>
  </li>
  <li className='relative hover:bg-gray-50'>
    <a
      className='block px-6 py-2 border-b border-gray-100'
      href='#'
    >
      Author
    </a>
  </li>
  <li className='relative hover:bg-gray-50'>
    <a
      className='block px-6 py-2 border-b border-gray-100'
      href='#'
    >
      Category
    </a>
  </li>
  <li className='relative hover:bg-gray-50'>
    <a
      className='block px-6 py-2 border-b border-gray-100'
      href='#'
    >
      Search
    </a>
  </li>
  <li className='relative hover:bg-gray-50'>
    <a
      className='block px-6 py-2 border-b border-gray-100'
      href='#'
    >
      Page
    </a>
  </li>
  <li className='relative hover:bg-gray-50'>
    <a
      className='block px-6 py-2 border-b border-gray-100'
      href='#'
    >
      Contact
    </a>
  </li>
</ul> */
}
{
  /* </li> */
}
