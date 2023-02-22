export const pageview = url => {
  if (window.gtag)
    window.gtag("config", process.env.GTAG_MEASUREMENT_ID, {
      page_path: url,
    })
}

export const event = ({action, category, label, value}) => {
  if (window.gtag)
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    })
}
