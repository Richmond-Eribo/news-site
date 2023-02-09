// "use client"
import WidePostCard from "@components/cards/wide-post-card"
import VerticalPostCard from "@components/cards/vertical-post-card"

import Link from "next/link"
// doing this to make the search page a client page
// import {useSearchParams} from "next/navigation"
import {NewsPreviewField} from "types"
const SearchGrid = async ({
  promise,
  alternatePromise,
  withImage,
  param,
}: {
  promise: Promise<NewsPreviewField[]>
  withImage?: boolean
  alternatePromise: Promise<NewsPreviewField[]>
  param: string
}) => {
  const SearchedNews = await promise
  const news = await alternatePromise
  const wideCard = SearchedNews[0]
  const smallCard = SearchedNews.slice(1, 10)
  console.log(SearchedNews)

  if (SearchedNews.length == 0) {
    return (
      <div className="flex-shrink max-w-full w-full lg:w-2/3  overflow-hidden">
        <h2 className="text-gray-800 pb-10 lg:leading-10 text-3xl lg:text-5xl font-bold">
          Oppssie, could not find your search
        </h2>
        <p className="text-gray-800 text-2xl font-bold  pb-5">
          <span className="inline-block  h-5 border-l-3 border-red-600 mr-2"></span>
          check these options
        </p>
        <div className="flex flex-row flex-wrap -mx-3">
          {news.map(post => (
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
    <div className="flex-shrink max-w-full w-full lg:w-2/3  overflow-hidden">
      <div className="w-full flex justify-between py-3">
        <h2 className="text-gray-800 lg:leading-10 text-3xl lg:text-5xl font-bold">
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
