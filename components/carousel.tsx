"use client"

import {categoryGrid} from "@schema/data"
import HorizontalPostCard from "./cards/horizontal-post-card"
import {Swiper, SwiperSlide} from "swiper/react"

import {Pagination} from "swiper"

const Carousel = () => {
  // media query to check for smaller devices
  // const mobileDisplay = window && window.matchMedia("(max-width: 900px)")
  // causes error in prerendered page in build

  return (
    <div className="relative bg-gray-50">
      <div className="bg-black bg-opacity-70">
        <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2">
          <div className="flex flex-row flex-wrap">
            <div className="flex-shrink max-w-full w-full py-12 overflow-hidden">
              <div className="w-full py-3">
                <h2 className="text-white text-2xl font-bold text-shadow-black">
                  <span className="inline-block h-5 border-l-3 border-red-600 mr-2"></span>
                  Videos
                </h2>
              </div>
              <Swiper
                slidesPerView={"auto"}
                spaceBetween={250}
                pagination={{
                  clickable: true,
                }}
                breakpoints={{
                  300: {
                    spaceBetween: 250,
                  },
                  868: {
                    spaceBetween: 200,
                  },
                  1024: {
                    spaceBetween: 50,
                  },
                }}
                modules={[Pagination]}
                className="pb-10"
              >
                {categoryGrid.map(category => (
                  <SwiperSlide style={{width: "25%"}} key={category.title}>
                    <HorizontalPostCard post={category} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      {/* <style jsx>
        {`
          SwiperSlide {
            // width: 25%;
          }
        `}
      </style> */}
    </div>
  )
}

export default Carousel
