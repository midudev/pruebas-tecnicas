import { products } from "@utils/products.json";

export async function GET({ params, request }) {
    const url = new URL(request.url)
    const query = url.searchParams.get('q')
    const page = Number(url.searchParams.get('p'))

    const data = products.filter((product)=> product.title.toLowerCase().includes(query.toLowerCase()))
    const paginatedData = data.slice(page*3,page*3+3)
    const nextPage = page+1;
    const prevPage = page === 0 ? 0 : page -1;
    const isLastPage = paginatedData.length < 3 ? true : false

    return new Response(
      JSON.stringify({paginatedData,nextPage,prevPage,isLastPage}), {
        status: 200,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  }