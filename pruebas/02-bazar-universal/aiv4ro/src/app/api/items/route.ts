import data from '../../../../products.json'

export async function GET (request: Request) {
  const url = new URL(request.url)
  const { searchParams } = url
  const search = searchParams.get('search')
  if (typeof search !== 'string') {
    return new Response(JSON.stringify([]), {
      headers: { 'content-type': 'application/json' }
    })
  }
  const loweredSearch = search.toLowerCase()
  const items = data.products.filter(item => item.title.toLowerCase().includes(loweredSearch))
  return new Response(JSON.stringify(items), {
    headers: { 'content-type': 'application/json' }
  })
}
