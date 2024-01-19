import {documentToReactComponents} from "@contentful/rich-text-react-renderer"
import {BLOCKS} from "@contentful/rich-text-types"
import Image from "next/image"
import markdownStyles from "./markdown-styles.module.css"
import RichTextAsset from "./rich-text-asset"

const options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
      const {url} = node.data.target.fields.file

      return (
        <figure>
          <Image
            className="mb-4"
            src={"https:" + url + "?w=800"}
            alt="Image"
            width={1080}
            height={721}
          />
        </figure>
      )
    },
  },
  renderText: (text: string) => text.replace("!", "?"),
}

export default function NewsBody({content}: {content: any}) {
  return (
    <div className={markdownStyles["markdown"]}>
      {documentToReactComponents(content.json, options)}
    </div>
  )
}
