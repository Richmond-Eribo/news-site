import Image from 'next/image'
import {categoryGrid} from '@schema/data'
import VerticalPostCard from '@components/cards/vertical-post-card'

const SmallPostGrid = () => {
  return (
    <div className='bg-white'>
      <div className='xl:container mx-auto px-3 sm:px-4 xl:px-2'>
        <div className='flex flex-row flex-wrap'>
          {/* <!-- Left --> */}
          <div className='flex-shrink max-w-full w-full lg:w-2/3 overflow-hidden'>
            <div className='w-full py-3'>
              <h2 className='text-gray-800 text-2xl font-bold'>
                <span className='inline-block h-5 border-l-3 border-red-600 mr-2'></span>
                Europe
              </h2>
            </div>

            <div className='flex flex-row flex-wrap -mx-3'>
              {categoryGrid.map(post => (
                <VerticalPostCard post={post} />
              ))}
            </div>
          </div>

          {/* <!-- right --> */}
          <div className='flex-shrink max-w-full w-full lg:w-1/3 lg:pl-8 lg:pt-14 lg:pb-8 order-first lg:order-last'>
            <div className='w-full bg-gray-100 h-full'>
              <div className='text-sm py-6 sticky'>
                <div className='w-full text-center'>
                  <a className='uppercase' href='#'>
                    Advertisement
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SmallPostGrid
