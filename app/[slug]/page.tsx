import AsideWithTopNews from "@components/asideContainer/aside-with-top-news"
import NewsBody from "@components/news/news-body"
import NewsHeader from "@components/news/news-header"
import {getAllSlugs, getPostWithFilter} from "@lib/graphQLapi"
import {NewsPreviewField} from "types"
import CoverImage from "@components/news/cover-image"

const News = async ({params: {slug}}: {params: {slug: string | undefined}}) => {
  const news = await getPostWithFilter<NewsPreviewField[]>({
    skip: 0,
    slug: slug,
    withBody: true,
  })
  const newsPost = news[0]

  // media query to check for smaller devices
  // const mobileDisplay = window?.matchMedia("(max-width: 900px)")

  return (
    <div>
      {/* <>{console.log(news)}</> */}
      {/* @ts-expect-error Server Component */}
      <AsideWithTopNews position="left">
        <article className="flex-shrink max-w-full w-full lg:w-2/3 overflow-hidden">
          <NewsHeader
            title={newsPost.title}
            author={newsPost.author.name}
            date={newsPost.sys.publishedAt}
          />
          <CoverImage
            url={newsPost.thumbnail.url}
            title={newsPost.title && newsPost.title}
            slug={newsPost.slug}
          />

          <NewsBody content={newsPost.body} />
        </article>
      </AsideWithTopNews>
    </div>
  )
}

export default News

export async function generateStaticParams() {
  const allSlugs = await getAllSlugs<{slug: string}[]>({})

  return allSlugs.slice(0, 1).map(allSlug => ({slug: allSlug.slug.toString()}))
}

// how to slice an array to get the first 5 items?
