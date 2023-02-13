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
    <figure className="relative overflow-hidden w-full h-[300px] lg:h-[500px]">
      <Image
        fill
        alt={`Cover Image for ${title}`}
        className={cn("shadow-small", {
          "hover:shadow-medium transition-shadow duration-200": slug,
        })}
        style={{objectFit: "cover"}}
        src={url}
      />
    </figure>
  )
}

export default CoverImage
