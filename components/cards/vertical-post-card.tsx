import Image from 'next/image'

const VerticalPostCard = ({
  post,
}: {
  post: {title: string; excerpt: string; imageUrl: string; url: string}
}) => {
  return (
    <div
      key={post.title}
      className='flex-shrink max-w-full w-full sm:w-1/3 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100'
    >
      <div className='flex flex-row sm:block hover-Image'>
        <a href=''>
          <Image
            className='max-w-full w-full mx-auto'
            src={post.imageUrl}
            alt='alt title'
            width={300}
            height={100}
          />
        </a>
        <div className='py-0 sm:py-3 pl-3 sm:pl-0'>
          <h3 className='text-lg font-bold leading-tight mb-2'>
            <a href='#'>{post.title}</a>
          </h3>
          <p className='hidden md:block text-gray-600 leading-tight mb-1'>
            {post.excerpt}
          </p>
          <a className='text-gray-500' href='#'>
            <span className='inline-block h-3 border-l-2 border-red-600 mr-2'></span>
            Europe
          </a>
        </div>
      </div>
    </div>
  )
}

export default VerticalPostCard
