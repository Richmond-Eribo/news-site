import Image from 'next/image'
import {categoryGrid} from '@schema/data'
import VerticalPostCard from '@components/cards/vertical-post-card'

const SmallPostGrid = () => {
  return (
    <div className='flex-shrink max-w-full w-full lg:w-2/3 overflow-hidden'>
      <div className='w-full py-3'>
        <h2 className='text-gray-800 text-2xl font-bold'>
          <span className='inline-block h-5 border-l-3 border-red-600 mr-2'></span>
          Europe
        </h2>
      </div>

      <div className='flex flex-row flex-wrap -mx-3'>
        {categoryGrid.slice(0, 6).map(post => (
          <VerticalPostCard withImage post={post} />
        ))}
      </div>
    </div>
  )
}

export default SmallPostGrid
