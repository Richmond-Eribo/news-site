import {notFound} from "next/navigation"

const POST_GRAPHQL_FIELDS_WITHOUT_BODY = `
sys {
  id
  publishedAt
}
title
thumbnail {
  fileName
  url
}
author {
  name
}
slug
categories
excerpt
`

const POST_GRAPHQL_FIELDS_WITH_BODY = `
sys {
  id
  publishedAt
}
title
thumbnail {
  fileName
  url
}
author {
  name
}
slug
categories
excerpt
body {
  json
}
`

// returns value or null
function stringOrNull(arg?: string) {
  const value = JSON.stringify(arg) || null
  return value
}

// Extract single news post from a fetch response
function extractPost(fetchResponse: any) {
  return fetchResponse?.data?.newsCollection?.items?.[0]
}

// Extract items array from a fetch response
function extractPostEntries(fetchResponse: any) {
  return fetchResponse?.data?.newsCollection?.items
}

// fetch GraphQl function
async function fetchGraphQL<T>(query: string, preview = false): Promise<T> {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.CONTENTFUL_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({query}),
    }
  )
    .then(response => response.json())
    .catch(error => {
      notFound()
      // throw error
    })
}

// async function to get news post with some filter arguement
export async function getPostWithFilter<T>({
  skip = 0,
  category,
  authorName = "admin",
  title,
  slug,
  limit = 50,
  withBody,
}: {
  skip?: number
  category?: string
  authorName?: string
  title?: string
  slug?: string
  limit?: number
  withBody?: boolean
}) {
  const entries = await fetchGraphQL<T>(
    `query {
        newsCollection (
          limit:${limit},
          skip:${skip}, 
          where:{ 
            author:{name:${stringOrNull(authorName)}}, 
            categories: ${stringOrNull(category)},
            slug: ${stringOrNull(slug)}
            title: ${stringOrNull(title)}}) {
          items {
            ${
              withBody
                ? POST_GRAPHQL_FIELDS_WITH_BODY
                : POST_GRAPHQL_FIELDS_WITHOUT_BODY
            }
          }
        }
      }`
  )

  return extractPostEntries(entries) as T
}

export async function getAllSlugs<T>({limit = 50}: {limit?: number}) {
  const entries = await fetchGraphQL<T>(`query {
    newsCollection (
      limit:${limit},
     ) {
      items {
        slug
      }
    }
  }`)

  return extractPostEntries(entries) as T
}
