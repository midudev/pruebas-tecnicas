import data from '@/lib/data.json'
import type { ProductKeyArray } from '@/models'
import type { APIRoute } from "astro"

export const prerender = false

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

    const toSearch: ProductKeyArray = ['title', 'category', 'brand', 'description']

    const filteredProducts = data.products.filter((product) => {
        const shouldAddThisProduct = toSearch.some(actualSearchParam => {
            const productKeyToValidate = product[actualSearchParam]

            if (typeof productKeyToValidate === 'string') {
                return productKeyToValidate.toLocaleLowerCase().includes(searchParam.toLocaleLowerCase())
            }
        })

        return shouldAddThisProduct
    })

    return new Response(JSON.stringify(filteredProducts), {
        status: 200,
        headers: {
            "Content-Type": "application/json"
        }
    })
}