import data from '@/lib/data.json'
import type { APIRoute } from "astro"

export const prerender = false;

export const GET: APIRoute = async ({ request }) => {

    const url = new URL(request.url)

    const searchParam = url.searchParams.get('q')
    
    if (searchParam == null) {
        return new Response(JSON.stringify({ error: 'Bad params' }), {
            status: 400,
            headers: {
                "Content-Type": "application/json"
            }
        })
    }

    const filteredProducts = data.products.filter((product) => product.title.toLocaleLowerCase().includes(searchParam.toLocaleLowerCase()))

    return new Response(JSON.stringify(filteredProducts), {
        status: 200,
        headers: {
            "Content-Type": "application/json"
        }
    })
}