import Link from "next/link"
import Search from "./search"

const NavLinks = [
  "news",
  "sports",
  "politics",
  "business",
  "health",
  "religion",
  "editorial",
]

const moreNavLinks = ["videos", "opinions", "investigation"]

const Navigation = () => {
  return (
    <nav className="bg-black sticky top-0 z-[9999]">
      <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2">
        <div className="flex justify-between">
          <Link
            href="/"
            className="mx-w-10 text-2xl font-bold capitalize text-white flex items-center"
          >
            The News
          </Link>

          <div className="flex flex-row">
            {/* <!-- nav menu --> */}
            <ul className="navbar hidden lg:flex lg:flex-row text-gray-400 text-sm items-center font-bold">
              <li className="relative border-l border-gray-800 hover:bg-gray-900">
                <Link
                  className="block capitalize py-3 px-6 border-b-2 border-transparent"
                  href={"/"}
                >
                  Home
                </Link>
              </li>
              {NavLinks.map(navLink => (
                <li
                  key={navLink}
                  className="relative border-l border-gray-800 hover:bg-gray-900"
                >
                  <Link
                    className="block capitalize py-3 px-6 border-b-2 border-transparent"
                    href={`/category/${navLink}`}
                  >
                    {navLink}
                  </Link>
                </li>
              ))}

              {/* more */}
              {/* <li className='dropdown relative border-l border-gray-800 hover:bg-gray-900'>
                <a
                  className='block py-3 px-6 border-b-2 border-transparent'
                  href='#'
                >
                  More
                </a>

                <ul
                  className='dropdown-menu font-normal absolute left-0 right-auto top-full z-50 border-b-0 text-left bg-white text-gray-700 border border-gray-100'
                  style={{minWidth: '12rem'}}
                >
                  <li className=' relative hover:bg-gray-50'>
                    <a
                      className='block py-2 px-6 border-b border-gray-100'
                      href='#'
                    >
                      Videos
                    </a>
                  </li>

                  <li className='subdropdown relative hover:bg-gray-50'>
                    <a
                      className='block py-2 px-6 border-b border-gray-100'
                      href='#'
                    >
                      Pages
                    </a>

                  {  
                  // dropdown submenu
                  }
                    <ul
                      className='dropdown-menu absolute left-full right-auto transform top-full z-50 border-b-0 text-left -mt-10 ml-0 mr-0 bg-white border border-gray-100'
                      style={{minWidth: '12rem'}}
                    >
                      <li className='relative hover:bg-gray-50'>
                        <a
                          className='block py-2 px-6 border-b border-gray-100'
                          href='#'
                        >
                          404
                        </a>
                      </li>
                      <li className='relative hover:bg-gray-50'>
                        <a
                          className='block py-2 px-6 border-b border-gray-100'
                          href='#'
                        >
                          Author
                        </a>
                      </li>
                      <li className='relative hover:bg-gray-50'>
                        <a
                          className='block py-2 px-6 border-b border-gray-100'
                          href='#'
                        >
                          Category
                        </a>
                      </li>
                      <li className='relative hover:bg-gray-50'>
                        <a
                          className='block py-2 px-6 border-b border-gray-100'
                          href='#'
                        >
                          Search
                        </a>
                      </li>
                      <li className='relative hover:bg-gray-50'>
                        <a
                          className='block py-2 px-6 border-b border-gray-100'
                          href='#'
                        >
                          Page
                        </a>
                      </li>
                      <li className='relative hover:bg-gray-50'>
                        <a
                          className='block py-2 px-6 border-b border-gray-100'
                          href='#'
                        >
                          Contact
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className='subdropdown relative hover:bg-gray-50'>
                    <a
                      className='block py-2 px-6 border-b border-gray-100'
                      href='#'
                    >
                      Post
                    </a>
                  </li>
                </ul>
              </li> */}
            </ul>

            {/* <!-- search form & mobile nav --> */}
            <div className="flex flex-row items-center text-gray-300">
              {/* search button it is client */}
              <Search />

              <div className="relative hover:bg-gray-800 block lg:hidden">
                <button
                  type="button"
                  className="menu-mobile block py-3 px-6 border-b-2 border-transparent"
                >
                  <span className="sr-only">Mobile menu</span>
                  <svg
                    className="inline-block h-6 w-6 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>{" "}
                  Menu
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation

// An example of a link with sub links

// <li className='subdropdown relative hover:bg-gray-50'>
// <a
//   className='block py-2 px-6 border-b border-gray-100'
//   href='#'
// >
//   Pages
// </a>

{
  /* <!--dropdown submenu--> */
}
{
  /* <ul
  className='dropdown-menu absolute left-full right-auto transform top-full z-50 border-b-0 text-left -mt-10 ml-0 mr-0 bg-white border border-gray-100'
  style={{minWidth: '12rem'}}
>
  <li className='relative hover:bg-gray-50'>
    <a
      className='block py-2 px-6 border-b border-gray-100'
      href='#'
    >
      404
    </a>
  </li>
  <li className='relative hover:bg-gray-50'>
    <a
      className='block py-2 px-6 border-b border-gray-100'
      href='#'
    >
      Author
    </a>
  </li>
  <li className='relative hover:bg-gray-50'>
    <a
      className='block py-2 px-6 border-b border-gray-100'
      href='#'
    >
      Category
    </a>
  </li>
  <li className='relative hover:bg-gray-50'>
    <a
      className='block py-2 px-6 border-b border-gray-100'
      href='#'
    >
      Search
    </a>
  </li>
  <li className='relative hover:bg-gray-50'>
    <a
      className='block py-2 px-6 border-b border-gray-100'
      href='#'
    >
      Page
    </a>
  </li>
  <li className='relative hover:bg-gray-50'>
    <a
      className='block py-2 px-6 border-b border-gray-100'
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
