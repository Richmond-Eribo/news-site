import {getPostWithFilter} from "@lib/graphQLapi"
import Image from "next/image"
import Link from "next/link"
import {NewsPreviewField} from "types"
import SquareAdCode from "../googleAds/googleAds"
import AdCode from "@components/googleAds/googleAds"

const AsideWithTopNews = ({
  children,
  position,
  moreNews,
}: {
  children: React.ReactNode
  position: "left" | "right"
  moreNews: NewsPreviewField[]
}) => {
  return (
    <div className="py-6 bg-gray-50">
      <div className="px-3 mx-auto xl:container sm:px-4 xl:px-2">
        <div className="flex flex-row flex-wrap">
          {/* <!-- Left --> */}
          {children}
          {/* <!-- right --> */}
          <div
            className={`flex-shrink max-w-full w-full lg:w-1/3  lg:pt-14 lg:pb-8   ${
              position === "right"
                ? "lg:order-last lg:pl-8"
                : "lg:order-first lg:pr-8"
            }`}
          >
            <div className="w-full bg-white">
              <div className="mb-6">
                <div className="p-4 bg-gray-100">
                  <h2 className="text-lg font-bold">Catch up</h2>
                </div>
                <ul className="post-number">
                  {moreNews.map(singleNews => (
                    <li
                      key={singleNews.title}
                      className="border-b border-gray-100 hover:bg-gray-50"
                    >
                      <Link
                        className="flex flex-row items-center px-6 py-3 text-lg font-bold"
                        href={`/${singleNews.slug}`}
                      >
                        {singleNews.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* square ad*/}
            <div className="sticky py-6 text-sm">
              <div className="w-full text-center">
                <AdCode code="802235349" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AsideWithTopNews
