import DateComponent from "@components/date"
import Link from "next/link"

const NewsHeader = ({
  title,
  date,
  author,
}: {
  title: string
  date: string
  author: string
}) => {
  return (
    <div className="w-full py-3 mb-3">
      <h2 className="text-gray-800 lg:leading-10 text-3xl lg:text-5xl font-bold">
        {title && title}
      </h2>
      <div className="flex pt-2 items-center text-gray-500 text-sm">
        <span className="inline-block  h-8 border-l-2 border-red-600 mr-2"></span>
        <div>
          <p className="">
            <DateComponent dateString={date} />
          </p>
          <Link href={"#"} className="text-blue-500 capitalize">
            {author}
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NewsHeader
