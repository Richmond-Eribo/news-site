"use client"

import {useRouter, usePathname, useSearchParams} from "next/navigation"
import {useEffect} from "react"
import * as gtag from "../lib/gtag"

// logging page views to google analytics

export default function Gtag() {
  const router = useRouter()
  const pathname = usePathname()
  const searchparams = useSearchParams()
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url)
    }

    // using pathname to reccord url instead
    handleRouteChange(pathname!)

    // when the component is mounted, subcribe to router change and log those pageview
    // router.events.on("routeChangeComplete", handleRouteChange)

    // if the component is unmounted, unsubcribe from the event with the 'off' method
    return () => {
      handleRouteChange(pathname!)

      // router.events.off("routeChangeComplete", handleRouteChange)
    }
  }, [pathname])

  return <div></div>
}
