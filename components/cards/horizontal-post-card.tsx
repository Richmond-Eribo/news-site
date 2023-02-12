import Image from "next/image"
import Link from "next/link"

const HorizontalPostCard = ({
  post,
}: {
  post: {
    title: string
    excerpt: string
    imageUrl: string
    url: string
    categories?: "string"
  }
}) => {
  return (
    <div className="hover-img min-w-[320px] bg-white">
      <figure className="relative h-56 block">
        <Image
          // className='max-w-full w-full mx-auto'
          src={post.imageUrl}
          alt="alt title"
          fill
        />
      </figure>
      <div className="py-3 px-6">
        <h3 className="text-lg font-bold leading-tight mb-2">
          <Link href="#">{post.title}</Link>
        </h3>
      </div>
    </div>
  )
}

export default HorizontalPostCard
