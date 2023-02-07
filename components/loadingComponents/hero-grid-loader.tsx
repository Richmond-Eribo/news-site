const LoadingHeroGridSkeleton = () => {
  return (
    <div>
      <div className="py-10">
        <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2">
          {/* <!-- big grid 1 --> */}
          <div className="flex flex-row flex-wrap">
            {/* <!--Start left cover--> */}
            <div className="flex-shrink max-w-full   w-full lg:w-1/2 pb-1 lg:pb-0 lg:pr-2 relative h-98 overflow-hidden">
              <div className="relative bg-slate-100 w-full h-full">
                <div className="absolute  px-5 pt-8 pb-5 bottom-0 w-full bg-gradient-cover">
                  <h2 className="text-3xl font-bold capitalize text-white mb-3 py-7"></h2>
                  <div className="pt-2">
                    <div className="inline-block  h-3 border-l-2 border-red-600 mr-2"></div>

                    <div className="text-gray-100 capitalize"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* start smaller box */}
            <div className="flex-shrink max-w-full w-full lg:w-1/2">
              <div className="box-one flex flex-row flex-wrap">
                {[1, 2, 3, 4].map(news => (
                  <article className="flex-shrink max-w-full w-full sm:w-1/2">
                    <div className="relative bg-slate-100 hover-img h-48 overflow-hidden">
                      {/* <Link href={`/`}> */}

                      {/* </Link> */}
                      <div className="absolute px-4 pt-7 pb-4 bottom-0 w-full bg-gradient-cover">
                        <div className="pt-1">
                          <div className="text-gray-100 capitalize">
                            <div className="inline-block  h-3 border-l-2 border-red-600 mr-2"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoadingHeroGridSkeleton
