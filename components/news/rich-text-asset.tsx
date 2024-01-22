import {getAssetFromPostBody} from "@lib/graphQLapi"
import Image from "next/image"

interface BlockAsset {
  data: {
    asset: {
      url: string
      title: string
      width: number
      height: number
    }
  }
}

export default async function RichTextAsset({id}: {id: number}) {
  const asset = await getAssetFromPostBody<BlockAsset>(id)

  return (
    <Image
      src={asset.data.asset.url}
      height={asset.data.asset.height}
      width={asset.data.asset.width}
      alt={asset.data.asset.title}
    />
  )
}
