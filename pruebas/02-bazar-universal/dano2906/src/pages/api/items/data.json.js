import { products } from "@utils/products.json";

export async function GET({ params, request }) {
    const url = new URL(request.url)
    const query = url.searchParams.get('q')
    const page = url.searchParams.get('p')

    const data = products.filter((product)=> product.title.toLowerCase().includes(query.toLowerCase()))
    const paginatedData = data.slice(page*3,page*3+3)

    return new Response(
      JSON.stringify({paginatedData}), {
        status: 200,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  }