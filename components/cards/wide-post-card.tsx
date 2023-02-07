import Image from "next/image"
import Link from "next/link"
import {NewsPreviewField} from "types"

const WidePostCard = ({news}: {news: NewsPreviewField}) => {
  return (
    <div className="flex-shrink max-w-full w-full px-3 pb-5">
      <div className="relative hover-Image max-h-98 overflow-hidden">
        {/* <!--thumbnail--> */}
        <a href="#">
          <Image
            width={300}
            height={100}
            className="max-w-full w-full mx-auto h-auto"
            src={news.thumbnail.url}
            alt="Image description"
          />
        </a>
        <div className="absolute px-5 pt-8 pb-5 bottom-0 w-full bg-gradient-cover">
          {/* <!--title--> */}
          <Link
            href={`/${news.slug}`}
            className="text-3xl font-bold capitalize text-white mb-3"
          >
            {news.title}
          </Link>
          <p className="text-gray-100 hidden sm:inline-block">{news.excerpt}</p>
          {/* <!-- author and date --> */}
          <div className="pt-2">
            <Link href="/category/Europe" className="text-gray-100 capitalize">
              <span className="inline-block  h-3 border-l-2 border-red-600 mr-2"></span>
              {news.categories}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WidePostCard
