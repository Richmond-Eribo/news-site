const Pagination = () => {
  return (
    <nav aria-label='Page navigation '>
      <ul className='flex justify-center space-x-0'>
        <li>
          <a
            className='block relative py-3 px-4 bg-white  border border-gray-200 hover:text-gray-100 hover:bg-gray-700  -mr-0.5 rounded-l  text-gray-100'
            href='#'
            aria-label='Previous'
          >
            <span aria-hidden='true'>«</span>
          </a>
        </li>
        <li>
          <a
            className='block relative py-3 px-4 bg-white  border border-gray-200  hover:text-gray-100 hover:bg-gray-700 -mr-0.5'
            href='#'
          >
            1
          </a>
        </li>
        <li>
          <a
            className='block relative py-3 px-4 bg-white  border border-gray-200  hover:text-gray-100 hover:bg-gray-700  -mr-0.5'
            href='#'
          >
            2
          </a>
        </li>
        <li>
          <a
            className='block relative py-3 px-4 bg-white border border-gray-200 hover:text-gray-100 hover:bg-gray-700 -mr-0.5'
            href='#'
          >
            3
          </a>
        </li>
        <li>
          <a
            className='block relative py-3 px-4 bg-white border border-gray-200 hover:text-gray-100 hover:bg-gray-700 -mr-0.5 rounded-r'
            href='#'
            aria-label='Next'
          >
            <span aria-hidden='true'>»</span>
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Pagination
