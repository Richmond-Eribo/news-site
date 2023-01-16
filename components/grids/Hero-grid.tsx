import Image from 'next/image'

const HeroGrid = () => {
  return (
    <>
      <div className='py-6'>
        <div className='xl:container mx-auto px-3 sm:px-4 xl:px-2'>
          {/* <!-- big grid 1 --> */}
          <div className='flex flex-row flex-wrap'>
            {/* <!--Start left cover--> */}
            <div className='flex-shrink max-w-full  w-full lg:w-1/2 pb-1 lg:pb-0 lg:pr-1'>
              <div className='relative hover-img max-h-98 overflow-hidden'>
                <a href='#'>
                  <Image
                    className='max-w-full w-full mx-auto h-auto'
                    width={500}
                    height={200}
                    src='https://picsum.photos/1000'
                    alt='Image description'
                  />
                </a>
                <div className='absolute px-5 pt-8 pb-5 bottom-0 w-full bg-gradient-cover'>
                  <a href='#'>
                    <h2 className='text-3xl font-bold capitalize text-white mb-3'>
                      Amazon Shoppers Are Ditching Designer Belts for This
                      Best-Selling
                    </h2>
                  </a>
                  <p className='text-gray-100 hidden sm:inline-block'>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This very helpfull for
                    generate default content..
                  </p>
                  <div className='pt-2'>
                    <div className='text-gray-100'>
                      <div className='inline-block h-3 border-l-2 border-red-600 mr-2'></div>
                      Europe
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* start smaller box */}

            <div className='flex-shrink max-w-full w-full lg:w-1/2'>
              <div className='box-one flex flex-row flex-wrap'>
                {[
                  'https://picsum.photos/600',
                  'https://picsum.photos/900',
                  'https://picsum.photos/400',
                  'https://picsum.photos/800',
                ].map(url => (
                  <article
                    key={url}
                    className='flex-shrink max-w-full w-full sm:w-1/2'
                  >
                    <div className='relative hover-img max-h-48 overflow-hidden'>
                      <a href='#'>
                        <Image
                          width={500}
                          height={200}
                          className='max-w-full w-full mx-auto h-auto'
                          src={url}
                          alt='Image description'
                        />
                      </a>
                      <div className='absolute px-4 pt-7 pb-4 bottom-0 w-full bg-gradient-cover'>
                        <a href='#'>
                          <h2 className='text-lg font-bold capitalize leading-tight text-white mb-1'>
                            News magazines are becoming obsolete, replaced by
                            gadgets
                          </h2>
                        </a>
                        <div className='pt-1'>
                          <div className='text-gray-100'>
                            <div className='inline-block h-3 border-l-2 border-red-600 mr-2'></div>
                            Techno
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeroGrid
