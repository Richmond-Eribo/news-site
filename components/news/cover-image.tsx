import cn from "classnames"
import Image from "next/image"

const CoverImage = ({
  title,
  slug,
  url,
}: {
  title: string
  slug: string
  url: string
}) => {
  return (
    <figure className="relative w-full h-[500px]">
      <Image
        fill
        alt={`Cover Image for ${title}`}
        className={cn("shadow-small", {
          "hover:shadow-medium transition-shadow duration-200": slug,
        })}
        src={url}
      />
    </figure>
  )
}

export default CoverImage
