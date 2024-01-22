import AsideWithTopNews from "@components/asideContainer/aside-with-top-news"
import WidePostCard from "@components/cards/wide-post-card"
import LargePostGrid from "@components/grids/large-post-grid"
import Pagination from "@components/pagination"
import {getPostWithFilter} from "@lib/graphQLapi"
import {NewsPreviewField} from "types"

const CategoryPage = async ({params: {slug}}: {params: {slug: string}}) => {
  const category: NewsPreviewField[] = await getPostWithFilter({
    skip: 0,
    limit: 10,
    category: slug,
  })

  const moreNews = await getPostWithFilter<NewsPreviewField[]>({
    skip: 5,
    limit: 15,
  })
  return (
    <div className="pb-10 bg-gray-50">
      <AsideWithTopNews moreNews={moreNews} position="right">
        <LargePostGrid withImage news={category} />
      </AsideWithTopNews>
      <Pagination />
    </div>
  )
}

export default CategoryPage
