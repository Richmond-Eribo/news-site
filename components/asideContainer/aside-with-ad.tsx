// Aside container with just adverts on the side

const AsideWithAd = ({
  children,
  position,
}: {
  children: React.ReactNode
  position: 'left' | 'right'
}) => {
  return (
    <div>
      <div className='bg-white pt-10'>
        <div className='xl:container mx-auto px-3 sm:px-4 xl:px-2'>
          <div className='flex flex-row flex-wrap'>
            {/* <!-- position of children component --> */}
            {children}

            {/* <!-- Aside --> */}
            <aside
              className={`flex-shrink max-w-full w-full lg:w-1/3  lg:pt-14 lg:pb-8 order-first  ${
                position === 'right'
                  ? 'lg:order-last lg:pl-8'
                  : 'lg:order-first lg:pr-8'
              }`}
            >
              <div className='w-full bg-gray-100 h-full'>
                <div className='text-sm py-6 sticky'>
                  <div className='w-full text-center'>
                    <a className='uppercase' href='#'>
                      Advertisement
                    </a>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AsideWithAd
