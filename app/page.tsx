import AsideWithAd from '@components/asideContainer/aside-with-ad'
import AsideWithTopNews from '@components/asideContainer/aside-with-top-news'
import Carousel from '@components/carousel'
import HeroGrid from '@components/grids/hero-grid'
import LargePostGrid from '@components/grids/large-post-grid'
import SmallPostGrid from '@components/grids/Small-post-grid'
import {getAllPostsForHome} from '@lib/api'

const Home = async () => {
  const post = await getAllPostsForHome()
  console.log(post)
  return (
    <div>
      {/* {
        post.slice(0,4)
      } */}
      <HeroGrid />
      <Carousel />

      <AsideWithAd position='right'>
        <SmallPostGrid />
      </AsideWithAd>

      <AsideWithTopNews position='right'>
        <LargePostGrid />
      </AsideWithTopNews>

      <AsideWithAd position='left'>
        <SmallPostGrid />
      </AsideWithAd>

      <AsideWithTopNews position='left'>
        <LargePostGrid />
      </AsideWithTopNews>

      <AsideWithAd position='right'>
        <SmallPostGrid />
      </AsideWithAd>
    </div>
  )
}

export default Home
