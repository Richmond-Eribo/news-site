import AsideWithAd from "@components/asideContainer/aside-with-ad"
import LoadingLargeGridSkeleton from "@components/loadingComponents/large-grid-loader"
import {getPostWithFilter, getSearchedPost} from "@lib/graphQLapi"
import {Suspense} from "react"
import {NewsPreviewField} from "types"
import SearchGrid from "./SearchGrid"

const page = async ({params: {slug}}: {params: {slug: string}}) => {
  const slugParam = slug.replaceAll("%20", " ")

  const search = await getSearchedPost<NewsPreviewField[]>(slugParam)
  const latestNews = await getPostWithFilter<NewsPreviewField[]>({
    skip: 0,
    limit: 5,
  })

  // console.log(slugParam)
  return (
    <>
      <h2 className="text-3xl font-bold text-gray-800 lg:leading-10 lg:text-5xl"></h2>
      <AsideWithAd position="right">
        <Suspense fallback={<LoadingLargeGridSkeleton />}>
          <SearchGrid
            searchedNews={search}
            alternateNews={latestNews}
            param={slugParam}
            withImage
          />
        </Suspense>
      </AsideWithAd>
    </>
  )
}

// slice a string and replace with a
export default page
