import Image from "next/image"
import Link from "next/link"
import {NewsPreviewField} from "types"

const LargeHeroCard = ({news}: {news: NewsPreviewField}) => {
  return (
    <div className="flex-shrink max-w-full  w-full lg:w-1/2 pb-1 lg:pb-0 lg:pr-2 relative h-98 overflow-hidden">
      <div className="relative overflow-hidden w-full h-full">
        <Image
          fill
          style={{objectFit: "cover"}}
          className="max-w-full w-full mx-auto h-auto"
          src={news.thumbnail.url}
          alt="Image description"
        />
        <div className="absolute px-5 pt-8 pb-5 bottom-0 w-full bg-gradient-cover">
          <Link href={`/${news.slug}`}>
            <h2 className="text-3xl font-bold capitalize text-white mb-3">
              {news.title}
            </h2>
          </Link>
          <p className="text-gray-100 hidden sm:inline-block">{news.excerpt}</p>
          <div className="pt-2">
            <Link
              href={`/category/${news.categories}`}
              className="text-gray-100 capitalize"
            >
              <div className="inline-block  h-3 border-l-2 border-red-600 mr-2"></div>
              {news.categories}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LargeHeroCard
