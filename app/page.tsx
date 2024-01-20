import AsideWithAd from "@components/asideContainer/aside-with-ad"
import AsideWithTopNews from "@components/asideContainer/aside-with-top-news"
import Carousel from "@components/carousel"
import HeroGrid from "@components/grids/hero-grid"
import LargePostGrid from "@components/grids/large-post-grid"
import SmallPostGrid from "@components/grids/Small-post-grid"
import LoadingHeroGridSkeleton from "@components/loadingComponents/hero-grid-loader"
import LoadingLargeGridSkeleton from "@components/loadingComponents/large-grid-loader"
import LoadingSmallGridSkeleton from "@components/loadingComponents/small-grid-loader"
import {getPostWithFilter} from "@lib/graphQLapi"

import {Suspense} from "react"
import {NewsPreviewField} from "types"

const Home = async () => {
  // const post = getAllPostsForHome()

  // const filteredNews = await getPostWithFilter({skip: 0})

  const categories = [
    {name: "education", limit: 6},
    {name: "politics", limit: 6},
    {name: "sports", limit: 6},
    {name: "business", limit: 6},
    {name: "security", limit: 10},
  ]

  // Create an array of promises for fetching news posts
  const categoryPromises = categories.map(category => {
    return getPostWithFilter<NewsPreviewField[]>({
      skip: 0,
      limit: category.limit,
      category: category.name,
    })
  })

  // Use Promise.all to fetch all news posts concurrently and await them
  const allNews = await Promise.all(categoryPromises)

  // function to fetch news post by filter category,
  const latestNews = await getPostWithFilter<NewsPreviewField[]>({
    skip: 0,
    limit: 5,
  })

  // function to fetch more news for the aside with news component
  const moreNews = await getPostWithFilter<NewsPreviewField[]>({
    skip: 5,
    limit: 5,
  })

  return (
    <div>
      <Suspense fallback={<LoadingHeroGridSkeleton />}>
        <HeroGrid promise={latestNews} />
      </Suspense>

      {/* <Carousel /> */}

      <AsideWithAd position="right">
        <Suspense fallback={<LoadingSmallGridSkeleton />}>
          <SmallPostGrid news={allNews[0]} />
        </Suspense>
      </AsideWithAd>

      <AsideWithTopNews moreNews={moreNews} position="right">
        <Suspense fallback={<LoadingLargeGridSkeleton />}>
          <LargePostGrid news={allNews[1]} />
        </Suspense>
      </AsideWithTopNews>

      <AsideWithAd position="left">
        <Suspense fallback={<LoadingSmallGridSkeleton />}>
          <SmallPostGrid news={allNews[2]} />
        </Suspense>
      </AsideWithAd>

      <AsideWithTopNews moreNews={moreNews} position="right">
        <Suspense fallback={<LoadingLargeGridSkeleton />}>
          <LargePostGrid news={allNews[3]} />
        </Suspense>
      </AsideWithTopNews>

      <AsideWithAd position="right">
        <Suspense fallback={<LoadingSmallGridSkeleton />}>
          <SmallPostGrid news={allNews[4]} />
        </Suspense>
      </AsideWithAd>
    </div>
  )
}

export default Home
