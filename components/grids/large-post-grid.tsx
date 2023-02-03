import Image from 'next/image'
import {categoryGrid} from '@schema/data'
import VerticalPostCard from '@components/cards/vertical-post-card'
import WidePostCard from '@components/cards/wide-post-card'

const LargePostGrid = ({withImage}: {withImage?: boolean}) => {
  return (
    <div className='flex-shrink max-w-full w-full lg:w-2/3  overflow-hidden'>
      <div className='w-full py-3'>
        <h2 className='text-gray-800 text-2xl font-bold'>
          <span className='inline-block h-5 border-l-3 border-red-600 mr-2'></span>
          Asian
        </h2>
      </div>
      <div className='flex flex-row flex-wrap -mx-3'>
        <WidePostCard />

        {categoryGrid.map(post => (
          <VerticalPostCard
            key={post.title}
            withImage={withImage}
            post={post}
          />
        ))}
      </div>
    </div>
  )
}

export default LargePostGrid
