import Image from "next/image"
import {categoryGrid} from "@schema/data"
import VerticalPostCard from "@components/cards/vertical-post-card"
import {NewsPreviewField} from "types"
import Link from "next/link"

const SmallPostGrid = async ({
  promise,
}: {
  promise: Promise<NewsPreviewField[]>
}) => {
  const news = await promise
  const gridTitle = news[0].categories
  return (
    <div className="flex-shrink max-w-full w-full lg:w-2/3 overflow-hidden">
      <div className="w-full flex justify-between py-3 capitalize">
        <Link
          href={`/category/${gridTitle}`}
          className="text-gray-800 text-2xl font-bold"
        >
          <span className="inline-block h-5 border-l-3 border-red-600 mr-2"></span>
          {gridTitle}
        </Link>

        <Link
          href={`/category/${gridTitle}`}
          className="tracking-wide underline underline-offset-8 font-bold decoration-2 decoration-red-600"
        >
          View more
        </Link>
      </div>

      <div className="flex flex-row  flex-wrap -mx-3">
        {news.map(post => (
          <VerticalPostCard key={post.title} withImage news={post} />
        ))}
      </div>
    </div>
  )
}

export default SmallPostGrid
