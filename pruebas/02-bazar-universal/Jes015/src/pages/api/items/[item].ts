import data from '@/lib/data.json'
import type { APIRoute } from "astro"

export const prerender = false

export const GET: APIRoute = async ({ params }) => {
    const { item: itemParam } = params
    const paramProductId = Number(itemParam)

    if (isNaN(paramProductId)) {
        return new Response(
            JSON.stringify(
                {
                    error: 'Bad param type. You must past the product ID'
                }
            ),
            {
                status: 400,
                headers: {
                    "Content-Type": "application/json"
                }
            }
        )
    }

    const productFound = data.products.find((product) => product.id === paramProductId)

    if (productFound == null) {
        return new Response(
            JSON.stringify(
                {
                    error: 'Product not found'
                }
            ),
            {
                status: 400,
                headers: {
                    "Content-Type": "application/json"
                }
            }
        )
    }


    return new Response(JSON.stringify({productFound}), {
        status: 200,
        headers: {
            "Content-Type": "application/json"
        }
    })
}