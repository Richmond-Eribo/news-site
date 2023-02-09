import AsideWithTopNews from "@components/asideContainer/aside-with-top-news"
import WidePostCard from "@components/cards/wide-post-card"
import LargePostGrid from "@components/grids/large-post-grid"
import Pagination from "@components/pagination"
import {getPostWithFilter} from "@lib/graphQLapi"
import {NewsPreviewField} from "types"

const CategoryPage = ({params: {slug}}: {params: {slug: string}}) => {
  const category: Promise<NewsPreviewField[]> = getPostWithFilter({
    skip: 0,
    limit: 10,
    category: slug,
  })
  return (
    <div className="bg-gray-50 pb-10">
      <AsideWithTopNews position="right">
        {/* @ts-expect-error Server Component */}
        <LargePostGrid withImage promise={category} />
      </AsideWithTopNews>
      <Pagination />
    </div>
  )
}

export default CategoryPage
