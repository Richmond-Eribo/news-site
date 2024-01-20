import LargeHeroCard from "@components/cards/large-hero-card"
import SmallHeroCard from "@components/cards/small-hero-card"
import Image from "next/image"
import {NewsPreviewField} from "types"

const HeroGrid = ({promise}: {promise: NewsPreviewField[]}) => {
  const news = promise
  const largeNewsHero = news[0]
  const smallNewsHero = news.slice(1, 5)
  return (
    <>
      <div className="z-10 py-12 lg:py-14">
        <div className="px-3 mx-auto xl:container sm:px-4 xl:px-2">
          {/* <!-- big grid 1 --> */}
          <div className="flex flex-row flex-wrap">
            {/* <!--Start left cover--> */}
            <LargeHeroCard news={largeNewsHero} />

            {/* start smaller box */}
            <div className="flex-shrink w-full max-w-full lg:w-1/2">
              <div className="flex flex-row flex-wrap box-one">
                {smallNewsHero.map(news => (
                  <SmallHeroCard key={news.title} news={news} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeroGrid
