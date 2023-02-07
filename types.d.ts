type Thumbnail = {
  fileName: string
  url: string
}

type Sys = {
  id: string
  publishedAt: string
}

type Author = {
  name: string
}
export interface NewsPreviewField {
  title: string
  thumbnail: Thumbnail
  sys: Sys
  slug: string
  categories: string
  excerpt: string
  author: Author
  body?: {
    json: JSON
  }
}
