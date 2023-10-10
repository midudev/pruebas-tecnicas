import data from '../../../../products.json'

export async function GET (request: Request) {
  const qParams = request.url.split('?')[1]?.split('=') ?? []
  const searchIndex = qParams.findIndex(item => item === 'search')
  if (searchIndex === -1) {
    return new Response(JSON.stringify([]), {
      headers: { 'content-type': 'application/json' }
    })
  }
  const search = qParams[searchIndex + 1]
  const loweredSearch = search.toLowerCase()
  const items = data.products.filter(item => item.title.toLowerCase().includes(loweredSearch) || item.category.toLowerCase().includes(loweredSearch) || item.description.toLowerCase().includes(loweredSearch))
  return new Response(JSON.stringify(items), {
    headers: { 'content-type': 'application/json' }
  })
}
