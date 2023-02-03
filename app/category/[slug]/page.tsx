import AsideWithTopNews from '@components/asideContainer/aside-with-top-news'
import WidePostCard from '@components/cards/wide-post-card'
import LargePostGrid from '@components/grids/large-post-grid'
import Pagination from '@components/pagination'

const CategoryPage = () => {
  return (
    <div className='bg-gray-50 pb-10'>
      <AsideWithTopNews position='right'>
        <LargePostGrid withImage />
      </AsideWithTopNews>
      <Pagination />
    </div>
  )
}

export default CategoryPage
