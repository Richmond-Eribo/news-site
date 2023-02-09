import Image from "next/image"
import Link from "next/link"
import {NewsPreviewField} from "types"

const SmallHeroCard = ({news}: {news: NewsPreviewField}) => {
  return (
    <article className="flex-shrink max-w-full w-full sm:w-1/2">
      <div className="relative  h-48 overflow-hidden">
        {/* <Link href={`/`}> */}
        <Image
          fill
          className="max-w-full w-full mx-auto h-auto"
          src={news.thumbnail.url}
          alt={news.thumbnail.fileName}
        />
        {/* </Link> */}
        <div className="absolute px-4 pt-7 pb-4 bottom-0 w-full bg-gradient-cover">
          <Link href={`/${news.slug}`}>
            <h2 className="text-lg font-bold capitalize leading-tight text-white mb-1">
              {news.title}
            </h2>
          </Link>
          <div className="pt-1">
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
    </article>
  )
}

export default SmallHeroCard
