import {getPostWithFilter} from "@lib/graphQLapi"
import Image from "next/image"
import Link from "next/link"
import {NewsPreviewField} from "types"

const AsideWithTopNews = async ({
  children,
  position,
}: {
  children: React.ReactNode
  position: "left" | "right"
}) => {
  // function to fetch news post by filter category,
  const moreNews = await getPostWithFilter<NewsPreviewField[]>({
    skip: 5,
    limit: 5,
  })

  return (
    <div className="bg-gray-50 py-6">
      <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2">
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
                      className="border-b  border-gray-100 hover:bg-gray-50"
                    >
                      <Link
                        className="text-lg font-bold  px-6 py-3 flex flex-row items-center"
                        href={`/${singleNews.slug}`}
                      >
                        {singleNews.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="text-sm py-6 sticky">
              <div className="w-full text-center">
                <a className="uppercase" href="#">
                  Advertisement
                </a>
                <a href="#">
                  <Image
                    width={300}
                    height={100}
                    className="mx-auto"
                    src="https://picsum.photos/300"
                    alt="advertisement area"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AsideWithTopNews
