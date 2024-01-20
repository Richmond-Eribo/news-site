// "use client"
import WidePostCard from "@components/cards/wide-post-card"
import VerticalPostCard from "@components/cards/vertical-post-card"

import Link from "next/link"
// doing this to make the search page a client page
// import {useSearchParams} from "next/navigation"
import {NewsPreviewField} from "types"
const SearchGrid = ({
  searchedNews,
  alternateNews,
  withImage,
  param,
}: {
  searchedNews: NewsPreviewField[]
  withImage?: boolean
  alternateNews: NewsPreviewField[]
  param: string
}) => {
  const wideCard = searchedNews[0]
  const smallCard = searchedNews.slice(1, 10)
  // console.log(searchedNews)

  if (searchedNews.length == 0) {
    return (
      <div className="flex-shrink w-full max-w-full overflow-hidden lg:w-2/3">
        <h2 className="pb-10 text-3xl font-bold text-gray-800 lg:leading-10 lg:text-5xl">
          Oppssie, could not find your search
        </h2>
        <p className="pb-5 text-2xl font-bold text-gray-800">
          <span className="inline-block h-5 mr-2 border-red-600 border-l-3"></span>
          check these options
        </p>
        <div className="flex flex-row flex-wrap -mx-3">
          {alternateNews.map(post => (
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

  return (
    <div className="flex-shrink w-full max-w-full overflow-hidden lg:w-2/3">
      <div className="flex justify-between w-full py-3">
        <h2 className="text-3xl font-bold text-gray-800 lg:leading-10 lg:text-5xl">
          Showing you searches for {param}
        </h2>
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

export default SearchGrid

// How to check if an array is empty in javascript?
