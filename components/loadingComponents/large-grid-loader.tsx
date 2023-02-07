// for reasons best know to the creator, this component is a pile of div with tailwind classes. you can read it to understand more.z

const LoadingLargeGridSkeleton = () => {
  return (
    <div className="flex-shrink max-w-full w-full lg:w-2/3  overflow-hidden">
      <div className="w-full flex justify-between py-3">
        <div className="text-gray-800 text-2xl font-bold capitalize">
          {/* title of grid */}
          <span className="inline-block  h-5 border-l-3 border-red-600 mr-2"></span>
        </div>

        <div className="tracking-wide underline underline-offset-8 font-bold decoration-2 decoration-red-600">
          View more
        </div>
      </div>
      <div className="flex flex-row flex-wrap -mx-3">
        {/* large horizontal card */}
        <div className="flex-shrink max-w-full w-full   px-3 pb-5">
          <div className="relative hover-Image overflow-hidden">
            {/* <!--thumbnail--> */}
            <div className="max-w-full w-full h-[300px]  mx-auto" />
            <div className="absolute px-5 pt-8 pb-5 bottom-0 w-full bg-gradient-cover">
              {/* <!--title--> */}
              <div className="text-3xl font-bold capitalize text-white mb-3"></div>
              <p className="text-gray-100 hidden sm:inline-block"></p>
              {/* <!-- author and date --> */}
              <div className="pt-2">
                <div className="text-gray-100 capitalize">
                  <span className="inline-block  h-3 border-l-2 border-red-600 mr-2"></span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* small vertical card */}
        {[1, 2, 3, 4, 5, 6].map(post => (
          <div className="flex-shrink  max-w-full w-full sm:w-1/3 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100">
            <div className="flex flex-row sm:block bg-slate-200">
              <figure className="h-40 relative block">
                <div className="max-w-full w-full mx-auto" />
              </figure>

              <div className="py-0 sm:py-3 pl-3 sm:pl-0">
                <h3 className="text-lg font-bold leading-tight mb-2"></h3>
                <p className="hidden line-clamp-4 h-14 md:block text-gray-600 leading-tight mb-1"></p>
                <div className="text-gray-500 capitalize">
                  <span className="inline-block  h-3 border-l-2 border-red-600 mr-2"></span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default LoadingLargeGridSkeleton
