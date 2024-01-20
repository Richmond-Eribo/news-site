import Image from "next/image"
import {categoryGrid} from "@schema/data"
import VerticalPostCard from "@components/cards/vertical-post-card"
import WidePostCard from "@components/cards/wide-post-card"
import {NewsPreviewField} from "types"
import Link from "next/link"

const LargePostGrid = ({
  news,
  withImage,
}: {
  news: NewsPreviewField[]
  withImage?: boolean
}) => {
  const wideCard = news[0]
  const smallCard = news.slice(1, 10)

  return (
    <div className="flex-shrink w-full max-w-full overflow-hidden lg:w-2/3">
      <div className="flex justify-between w-full py-3">
        <Link
          href={`/category/${wideCard.categories}`}
          className="text-2xl font-bold text-gray-800 capitalize"
        >
          {/* title of grid */}
          <span className="inline-block h-5 mr-2 border-red-600 border-l-3"></span>
          {wideCard.categories}
        </Link>

        <Link
          href={`/category/${wideCard.categories}`}
          className="font-bold tracking-wide underline underline-offset-8 decoration-2 decoration-red-600"
        >
          View more
        </Link>
      </div>
      <div className="flex flex-row flex-wrap -mx-3">
        <WidePostCard news={wideCard} />

        {smallCard.map(post => (
          <VerticalPostCard
            key={post.title}
            news={post}
            withImage={withImage}
          />
        ))}
      </div>
    </div>
  )
}

export default LargePostGrid
