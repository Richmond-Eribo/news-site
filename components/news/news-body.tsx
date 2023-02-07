import {documentToReactComponents} from "@contentful/rich-text-react-renderer"
import {BLOCKS} from "@contentful/rich-text-types"
import markdownStyles from "./markdown-styles.module.css"
import RichTextAsset from "./rich-text-asset"

const customMarkdownOptions = (content: any) => ({
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node: any) => (
      <RichTextAsset
        id={node.data.target.sys.id}
        assets={content.links.assets.block}
      />
    ),
  },
})

export default function NewsBody({content}: {content: any}) {
  return (
    <div className={markdownStyles["markdown"]}>
      {documentToReactComponents(content.json, customMarkdownOptions(content))}
    </div>
  )
}
