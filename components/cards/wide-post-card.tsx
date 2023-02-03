import Image from 'next/image'
import Link from 'next/link'

const WidePostCard = () => {
  return (
    <div className='flex-shrink max-w-full w-full px-3 pb-5'>
      <div className='relative hover-Image max-h-98 overflow-hidden'>
        {/* <!--thumbnail--> */}
        <a href='#'>
          <Image
            width={300}
            height={100}
            className='max-w-full w-full mx-auto h-auto'
            src='https://picsum.photos/300'
            alt='Image description'
          />
        </a>
        <div className='absolute px-5 pt-8 pb-5 bottom-0 w-full bg-gradient-cover'>
          {/* <!--title--> */}
          <a href='#'>
            <h2 className='text-3xl font-bold capitalize text-white mb-3'>
              Amazon Shoppers Are Ditching Designer Belts for This Best-Selling
            </h2>
          </a>
          <p className='text-gray-100 hidden sm:inline-block'>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This very helpfull for generate default
            content..
          </p>
          {/* <!-- author and date --> */}
          <div className='pt-2'>
            <Link href='/category/Europe' className='text-gray-100'>
              <span className='inline-block h-3 border-l-2 border-red-600 mr-2'></span>
              Europe
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WidePostCard
