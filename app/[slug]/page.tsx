import AsideWithTopNews from "@components/asideContainer/aside-with-top-news"
import NewsBody from "@components/news/news-body"
import NewsHeader from "@components/news/news-header"
import {getAllSlugs, getPostWithFilter} from "@lib/graphQLapi"
import {NewsPreviewField} from "types"
import CoverImage from "@components/news/cover-image"
import {Metadata, ResolvingMetadata} from "next"

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
      <AsideWithTopNews position="left">
        <article className="flex-shrink w-full max-w-full overflow-hidden lg:w-2/3">
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

  return allSlugs.map(allSlug => ({slug: allSlug.slug.toString()}))
}

export async function generateMetadata({
  params,
}: {
  params: {slug: string}
}): Promise<Metadata> {
  // read route params
  const slug = params.slug
  const news = await getPostWithFilter<NewsPreviewField[]>({
    skip: 0,
    slug: slug,
    withBody: true,
  })
  const newsPost = news[0]

  return {
    title: newsPost.title,
    description: newsPost.excerpt,
    authors: newsPost.author,
    openGraph: {
      title: newsPost.title,
      description: newsPost.excerpt,
      url: `https://naijametronews.com/${newsPost.slug}`,
      siteName: "Naija Metro News",
      images: [
        {
          url: `${newsPost.thumbnail.url}`,
          width: 800,
          height: 600,
        },
      ],
      publishedTime: newsPost.sys.publishedAt,
      locale: "en-US",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: newsPost.title,
      description: newsPost.excerpt,
      images: [`${newsPost.thumbnail.url}`],
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: false,
      },
    },
  }
}
