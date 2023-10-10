import data from '../../../../../products.json'

export async function GET (request: Request) {
  // get id from request
  const url = new URL(request.url)
  const { pathname } = url
  const idStr = pathname.split('/').pop()
  if (typeof idStr !== 'string') {
    return notFound()
  }
  const idNum = parseInt(idStr)
  if (isNaN(idNum)) {
    return notFound()
  }
  const item = data.products.find(item => item.id === idNum)
  if (item == null) {
    return notFound()
  }
  return new Response(JSON.stringify(item), {
    headers: { 'content-type': 'application/json' }
  })
}

function notFound () {
  return new Response(null, {
    status: 404,
    headers: { 'content-type': 'application/json' }
  })
}
