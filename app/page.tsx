import HeroGrid from '@components/grids/Hero-grid'
import LargePostGrid from '@components/grids/large-post-grid'
import SmallPostGrid from '@components/grids/Small-post-grid'

const Home = () => {
  return (
    <div>
      <HeroGrid />
      <SmallPostGrid />
      <LargePostGrid />
    </div>
  )
}

export default Home
