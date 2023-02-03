import Image from 'next/image'

const AsideWithTopNews = ({
  children,
  position,
}: {
  children: React.ReactNode
  position: 'left' | 'right'
}) => {
  return (
    <div className='bg-gray-50 py-6'>
      <div className='xl:container mx-auto px-3 sm:px-4 xl:px-2'>
        <div className='flex flex-row flex-wrap'>
          {/* <!-- Left --> */}
          {children}
          {/* <!-- right --> */}
          <div
            className={`flex-shrink max-w-full w-full lg:w-1/3  lg:pt-14 lg:pb-8 order-first  ${
              position === 'right'
                ? 'lg:order-last lg:pl-8'
                : 'lg:order-first lg:pr-8'
            }`}
          >
            <div className='w-full bg-white'>
              <div className='mb-6'>
                <div className='p-4 bg-gray-100'>
                  <h2 className='text-lg font-bold'>Most Popular</h2>
                </div>
                <ul className='post-number'>
                  <li className='border-b border-gray-100 hover:bg-gray-50'>
                    <a
                      className='text-lg font-bold px-6 py-3 flex flex-row items-center'
                      href='#'
                    >
                      Why the world would end without political polls
                    </a>
                  </li>
                  <li className='border-b border-gray-100 hover:bg-gray-50'>
                    <a
                      className='text-lg font-bold px-6 py-3 flex flex-row items-center'
                      href='#'
                    >
                      Meet The Man Who Designed The Ducati Monster
                    </a>
                  </li>
                  <li className='border-b border-gray-100 hover:bg-gray-50'>
                    <a
                      className='text-lg font-bold px-6 py-3 flex flex-row items-center'
                      href='#'
                    >
                      2020 Audi R8 Spyder spy shots release
                    </a>
                  </li>
                  <li className='border-b border-gray-100 hover:bg-gray-50'>
                    <a
                      className='text-lg font-bold px-6 py-3 flex flex-row items-center'
                      href='#'
                    >
                      Lamborghini makes Huracán GT3 racer faster for 2019
                    </a>
                  </li>
                  <li className='border-b border-gray-100 hover:bg-gray-50'>
                    <a
                      className='text-lg font-bold px-6 py-3 flex flex-row items-center'
                      href='#'
                    >
                      ZF plans $14 billion autonomous vehicle push, concept van
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className='text-sm py-6 sticky'>
              <div className='w-full text-center'>
                <a className='uppercase' href='#'>
                  Advertisement
                </a>
                <a href='#'>
                  <Image
                    width={300}
                    height={100}
                    className='mx-auto'
                    src='https://picsum.photos/300'
                    alt='advertisement area'
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AsideWithTopNews
