"use client"
import {useRouter} from "next/navigation"
import {useState} from "react"

// The submit function lives in this component because it is a client component. I do not understand the effect of passing the onSubmit function as prop.

const Search = () => {
  // useRouter inintialization
  const router = useRouter()

  // useState to handle form input value
  const [querySearch, setQuerySearch] = useState("")

  // search Open and Close state
  const [openSearch, setOpenSearch] = useState(false)

  // Handles the submit event onSubmit, and also do not know how to type HTMLformEvent to include id's from the form
  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    // Stops the form from refreshing the page on submit
    event.preventDefault()
    router.push(`/search/${querySearch}`)
  }
  return (
    <div className=" relative border-r z-50  lg:border-l border-gray-800 hover:bg-gray-900">
      <button
        onClick={() => setOpenSearch(current => !current)}
        className="block py-3 px-6 border-b-2 border-transparent"
      >
        {/* open and close search svg */}
        {!openSearch ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="open bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="close bi bi-x-lg"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"
            />
            <path
              fillRule="evenodd"
              d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"
            />
          </svg>
        )}
      </button>

      {/* search form */}
      {openSearch && (
        <div
          className={` absolute transition-all duration-200 ease-in-out -right-24  -bottom-10 md:right-0 h-16 border-l border-r border-b  top-12  text-left bg-black text-gray-700  border-gray-100 mt-1 p-3`}
          style={{minWidth: "20rem"}}
        >
          <form
            onSubmit={handleSubmit}
            className="flex flex-wrap items-stretch w-full relative"
          >
            <input
              value={querySearch}
              onChange={e => setQuerySearch(e.target.value)}
              required
              id="searchQuery"
              minLength={3}
              type="text"
              className="flex-shrink flex-grow  max-w-full leading-5 w-px flex-1 relative py-2 px-5 text-gray-800 bg-white border border-gray-300 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 dark:text-gray-400 dark:bg-gray-700 dark:border-gray-700 dark:focus:border-gray-600"
              name="text"
              placeholder="Search..."
              aria-label="search"
            />
            <div className="flex -mr-px">
              <button
                disabled={querySearch ? false : true}
                className="flex items-center py-2 px-5 -ml-1 leading-5 text-gray-100 bg-black hover:text-white hover:bg-gray-900 hover:ring-0 focus:outline-none focus:ring-0"
                type="submit"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
                </svg>
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  )
}

export default Search
