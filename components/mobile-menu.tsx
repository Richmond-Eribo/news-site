"use client"
import {NavLinks} from "@schema/data"
import Link from "next/link"
import {useState} from "react"

const MobileMenu = ({}) => {
  // useState of the menu drawer
  const [openMenu, setOpenMenu] = useState(false)
  // useState of the navlinks
  const [menuNavLinks, setMenuNavLinks] = useState(false)

  // const Navlink = useRef(second)

  // function that set the menu drawer and the navlinks state to false or true
  const menuOpen = () => {
    if (openMenu && menuNavLinks) {
      setMenuNavLinks(false)
      setOpenMenu(false)
    } else {
      setOpenMenu(true)

      setTimeout(() => {
        setMenuNavLinks(true)
      }, 300)
    }
  }
  return (
    <div className="relative   block lg:hidden">
      <button
        onClick={menuOpen}
        type="button"
        className="menu-mobile text-white block py-3 px-6 border-b-2 border-transparent"
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
            d={
              openMenu
                ? "M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z"
                : "M4 6h16M4 12h16M4 18h16"
            }
          ></path>
        </svg>{" "}
        Menu
      </button>

      <div
        className={`bg-white text-black duration-500 ease-in  w-[300px]  absolute -left-44 translate-y-24  -top-full my-2 ${
          openMenu ? "z-50 py-5 pointer-events-auto" : "h-0 pointer-events-none"
        } `}
      >
        <ul className="">
          {NavLinks.map((navLink, index) => (
            <li
              key={index}
              className={`relative duration  hover:bg-red-500 transition-all ease-in-out duration-300 ${
                menuNavLinks ? "" : "opacity-0 "
              }   `}
            >
              <Link
                className="block capitalize py-5 text-2xl font-bold px-6 border-b-2 border-transparent"
                href={`/category/${navLink}`}
              >
                {navLink}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default MobileMenu
