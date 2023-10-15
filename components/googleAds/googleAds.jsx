"use client"
import React from "react"
import {useRouter} from "next/navigation"

class AdCodeWithoutRouter extends React.Component {
  renderAds() {
    ;((window.adsbygoogle = window.adsbygoogle) || []).push({})
  }

  componentDidMount() {
    this.renderAds()
  }

  componentDidUpdate(prevProps) {
    if (this.props.router.asPath !== prevProps.router.asPath) {
      this.renderAds()
    }
  }

  render() {
    return (
      <div className="container mx-auto text-center" aria-hidden={true}>
        <ins
          className="adsbygoogle"
          style={{display: "block", width: "100%"}}
          data-ad-client="ca-pub-3465737015534563"
          data-ad-slot={this.props.code}
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
        <script
          dangerouslySetInnerHTML={{
            __html: "(window.adsbygoogle = window.adsbygoogle || []).push({});",
          }}
        ></script>
      </div>
    )
  }
}

const AdCode = code => {
  const router = useRouter()
  return <AdCodeWithoutRouter code={code} router={router} />
}

export default AdCode

// data-ad-client="ca-pub-3465737015534563"
//      data-ad-slot="5580803234"  8022353494
