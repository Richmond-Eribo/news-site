import Image from "next/image"
import {categoryGrid} from "@schema/data"
import VerticalPostCard from "@components/cards/vertical-post-card"
import {NewsPreviewField} from "types"
import Link from "next/link"

const SmallPostGrid = ({news}: {news: NewsPreviewField[]}) => {
  const gridTitle = news[0].categories
  return (
    <div className="flex-shrink w-full max-w-full overflow-hidden lg:w-2/3">
      <div className="flex justify-between w-full py-3 capitalize">
        <Link
          href={`/category/${gridTitle}`}
          className="text-2xl font-bold text-gray-800"
        >
          <span className="inline-block h-5 mr-2 border-red-600 border-l-3"></span>
          {gridTitle}
        </Link>

        <Link
          href={`/category/${gridTitle}`}
          className="font-bold tracking-wide underline underline-offset-8 decoration-2 decoration-red-600"
        >
          View more
        </Link>
      </div>

      <div className="flex flex-row flex-wrap -mx-3">
        {news.map(post => (
          <VerticalPostCard key={post.title} withImage news={post} />
        ))}
      </div>
    </div>
  )
}

export default SmallPostGrid
