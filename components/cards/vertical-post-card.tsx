import Image from "next/image"
import Link from "next/link"
import {NewsPreviewField} from "types"

const VerticalnewsCard = ({
  news,
  withImage,
}: {
  news: NewsPreviewField
  withImage?: boolean
}) => {
  return (
    <div className="flex-shrink max-w-full w-full sm:w-1/3 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100">
      <div className="flex flex-row sm:block ">
        {withImage && (
          <figure className="h-40 relative block">
            <Image
              className="max-w-full w-full mx-auto"
              src={news.thumbnail.url}
              alt="alt title"
              fill
            />
          </figure>
        )}

        <div className="py-0 sm:py-3 pl-3 sm:pl-0">
          <h3 className="text-lg font-bold leading-tight mb-2">
            <Link href={`/${news.slug}`}>{news.title}</Link>
          </h3>
          <p className="hidden line-clamp-4 h-14 md:block text-gray-600 leading-tight mb-1">
            {news.excerpt}
          </p>
          <Link
            className="text-gray-500 capitalize"
            href={`/category/${news.categories}`}
          >
            <span className="inline-block  h-3 border-l-2 border-red-600 mr-2"></span>
            {news.categories}
          </Link>
        </div>
      </div>
    </div>
  )
}

export default VerticalnewsCard
