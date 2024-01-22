import {documentToReactComponents} from "@contentful/rich-text-react-renderer"
import {BLOCKS} from "@contentful/rich-text-types"
import markdownStyles from "./markdown-styles.module.css"
import RichTextAsset from "./rich-text-asset"

interface BlockAsset {
  data: {
    news: {
      body: {
        links: {
          assets: {
            block: {
              sys: string
              url: string
            }[]
          }
        }
      }
    }
  }
}

export default function NewsBody({content}: {content: any}) {
  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: async (node: any) => {
        const id = node.data.target.sys.id

        return (
          <figure className="">
            <RichTextAsset id={id} />
          </figure>
        )
      },
    },
    renderText: (text: string) => text.replace("!", "?"),
  }

  return (
    <div className={markdownStyles["markdown"]}>
      {documentToReactComponents(content.json, options)}
    </div>
  )
}
