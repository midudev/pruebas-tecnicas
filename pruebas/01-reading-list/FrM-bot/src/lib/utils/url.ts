export function fromObjectQueriesToUrl({
  queries,
  baseUrl
}: {
  queries: { [k: string]: string }
  baseUrl: string | URL
}): URL {
  const url = new URL(baseUrl)
  const params = new URLSearchParams(url.search)

  Object.entries(queries).forEach(([key, value]) => {
    if (value) {
      params.append(key, String(value))
    }
  })
  url.search = params.toString()
  return url
}
