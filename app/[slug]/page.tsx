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

  return (
    <article>
      <AsideWithTopNews position="right">
        {/* <div className="flex-shrink max-w-full w-full lg:w-2/3 overflow-hidden">
          <NewsHeader
            title={newsPost.title && newsPost.title}
            author={newsPost.author.name}
            date={newsPost.sys.publishedAt}
          />
          <CoverImage
            url={newsPost.thumbnail.url}
            title={newsPost.title && newsPost.title}
            slug={newsPost.slug}
          />

          <NewsBody content={newsPost.body} />
        </div> */}
        <p>hi</p>
      </AsideWithTopNews>
    </article>
  )
}

export default News

export async function generateStaticParams() {
  const allSlugs = await getAllSlugs<{slug: string}[]>({})

  return allSlugs.map(allSlug => ({slug: allSlug.slug.toString()}))
}
