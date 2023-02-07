import Image from "next/image"
import {categoryGrid} from "@schema/data"
import VerticalPostCard from "@components/cards/vertical-post-card"
import WidePostCard from "@components/cards/wide-post-card"
import {NewsPreviewField} from "types"
import Link from "next/link"

const LargePostGrid = async ({
  promise,
  withImage,
}: {
  promise: Promise<NewsPreviewField[]>
  withImage?: boolean
}) => {
  const news = await promise
  const wideCard = news[0]
  const smallCard = news.slice(1, 10)

  return (
    <div className="flex-shrink max-w-full w-full lg:w-2/3  overflow-hidden">
      <div className="w-full flex justify-between py-3">
        <Link
          href={`/category/${wideCard.categories}`}
          className="text-gray-800 text-2xl font-bold capitalize"
        >
          {/* title of grid */}
          <span className="inline-block  h-5 border-l-3 border-red-600 mr-2"></span>
          {wideCard.categories}
        </Link>

        <Link
          href={`/category/${wideCard.categories}`}
          className="tracking-wide underline underline-offset-8 font-bold decoration-2 decoration-red-600"
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
