import AsideWithTopNews from "@components/asideContainer/aside-with-top-news"
import CoverImage from "@components/news/cover-image"
import NewsBody from "@components/news/news-body"
import NewsHeader from "@components/news/news-header"
import {getAllSlugs, getPostWithFilter} from "@lib/graphQLapi"
import Image from "next/image"
import Link from "next/link"
import {NewsPreviewField} from "types"
import cn from "classnames"

const News = async ({params: {slug}}: {params: {slug: string | undefined}}) => {
  const news = await getPostWithFilter<NewsPreviewField[]>({
    skip: 0,
    slug: slug,
    withBody: true,
  })
  const newsPost = news[0]
  // console.log(newsPost.body)

  return (
    <article>
      <AsideWithTopNews position="right">
        <div className="flex-shrink max-w-full w-full lg:w-2/3 overflow-hidden">
          <NewsHeader
            title={newsPost.title}
            author={newsPost.author.name}
            date={newsPost.sys.publishedAt}
          />
          {/* Image of the post */}
          <figure className="relative w-full h-[500px]">
            <Image
              fill
              alt={`Cover Image for ${newsPost.title}`}
              className={cn("shadow-small", {
                "hover:shadow-medium transition-shadow duration-200": slug,
              })}
              src={newsPost.thumbnail.url}
            />
          </figure>

          <NewsBody content={newsPost.body} />
        </div>
      </AsideWithTopNews>
    </article>
  )
}

export default News

export async function generateStaticParams() {
  const allSlugs = await getAllSlugs<{slug: string}[]>({})

  return allSlugs.map(allSlug => ({slug: allSlug.slug}))
}
