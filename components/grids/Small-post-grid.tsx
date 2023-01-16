import Image from 'next/image'

const categoryGrid = [
  {
    title: '1  Tips to Save Money Booking Your Next Hotel Room',
    excerpt:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    imageUrl: 'https://picsum.photos/300',
    url: '#',
  },
  {
    title: '2 Tips to Save Money Booking Your Next Hotel Room',
    excerpt:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    imageUrl: 'https://picsum.photos/300',
    url: '#',
  },
  {
    title: ' 3 Tips to Save Money Booking Your Next Hotel Room',
    excerpt:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    imageUrl: 'https://picsum.photos/300',
    url: '#',
  },
  {
    title: ' 4 Tips to Save Money Booking Your Next Hotel Room',
    excerpt:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    imageUrl: 'https://picsum.photos/300',
    url: '#',
  },
  {
    title: ' 5 Tips to Save Money Booking Your Next Hotel Room',
    excerpt:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    imageUrl: 'https://picsum.photos/300',
    url: '#',
  },
  {
    title: ' 6 Tips to Save Money Booking Your Next Hotel Room',
    excerpt:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    imageUrl: 'https://picsum.photos/300',
    url: '#',
  },
]

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
