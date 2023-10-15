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
    return getPostWithFilter<NewsPreviewField>({
      skip: 0,
      limit: category.limit,
      category: category.name,
    })
  })

  // Use Promise.all to fetch all news posts concurrently
  const allNewsPromises = Promise.all(categoryPromises)

  // Now, you can await the results
  const allNews = await allNewsPromises

  // function to fetch news post by filter category,
  const latestNews = getPostWithFilter<NewsPreviewField[]>({
    skip: 0,
    limit: 5,
  })

  const educationCategory = getPostWithFilter<NewsPreviewField[]>({
    skip: 0,
    limit: 6,
    category: "education",
  })
  const politicsCategory = getPostWithFilter<NewsPreviewField[]>({
    skip: 0,
    limit: 6,
    category: "politics",
  })
  const sportsCategory = getPostWithFilter<NewsPreviewField[]>({
    skip: 0,
    limit: 6,
    category: "sports",
  })
  const businessCategory = getPostWithFilter<NewsPreviewField[]>({
    skip: 0,
    limit: 6,
    category: "business",
  })
  const securityCategory = getPostWithFilter<NewsPreviewField[]>({
    skip: 0,
    limit: 10,
    category: "security",
  })

  return (
    <div>
      <Suspense fallback={<LoadingHeroGridSkeleton />}>
        {/* @ts-expect-error Server Component */}
        <HeroGrid promise={latestNews} />
      </Suspense>

      {/* <Carousel /> */}

      <AsideWithAd position="right">
        <Suspense fallback={<LoadingSmallGridSkeleton />}>
          {/* @ts-expect-error Server Component */}
          <SmallPostGrid promise={businessCategory} />
        </Suspense>
      </AsideWithAd>

      {/* @ts-expect-error */}
      <AsideWithTopNews position="right">
        <Suspense fallback={<LoadingLargeGridSkeleton />}>
          {/* @ts-expect-error Server Component */}
          <LargePostGrid promise={securityCategory} />
        </Suspense>
      </AsideWithTopNews>

      <AsideWithAd position="left">
        <Suspense fallback={<LoadingSmallGridSkeleton />}>
          {/* @ts-expect-error Server Component */}
          <SmallPostGrid promise={politicsCategory} />
        </Suspense>
      </AsideWithAd>

      {/* @ts-expect-error */}
      <AsideWithTopNews position="right">
        <Suspense fallback={<LoadingLargeGridSkeleton />}>
          {/* @ts-expect-error Server Component */}
          <LargePostGrid promise={educationCategory} />
        </Suspense>
      </AsideWithTopNews>

      <AsideWithAd position="right">
        <Suspense fallback={<LoadingSmallGridSkeleton />}>
          {/* @ts-expect-error Server Component */}
          <SmallPostGrid promise={sportsCategory} />
        </Suspense>
      </AsideWithAd>
    </div>
  )
}

export default Home
