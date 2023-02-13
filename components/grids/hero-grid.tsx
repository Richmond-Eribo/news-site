import LargeHeroCard from "@components/cards/large-hero-card"
import SmallHeroCard from "@components/cards/small-hero-card"
import Image from "next/image"
import {NewsPreviewField} from "types"

const HeroGrid = async ({promise}: {promise: Promise<NewsPreviewField[]>}) => {
  const news = await promise
  const largeNewsHero = news[0]
  const smallNewsHero = news.slice(1, 5)
  return (
    <>
      <div className="lg:py-14 py-12 z-10">
        <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2">
          {/* <!-- big grid 1 --> */}
          <div className="flex flex-row flex-wrap">
            {/* <!--Start left cover--> */}
            <LargeHeroCard news={largeNewsHero} />

            {/* start smaller box */}
            <div className="flex-shrink max-w-full w-full lg:w-1/2">
              <div className="box-one flex flex-row flex-wrap">
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
