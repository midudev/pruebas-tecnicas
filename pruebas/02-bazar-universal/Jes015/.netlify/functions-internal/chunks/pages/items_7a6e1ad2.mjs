import { d as data } from './_item__bbe90bd0.mjs';

const prerender = false;
const GET = async ({ request }) => {
  const url = new URL(request.url);
  const searchParam = url.searchParams.get("q");
  if (searchParam == null) {
    return new Response(JSON.stringify({ error: "Bad params" }), {
      status: 400,
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
  const toSearch = ["title", "category", "brand", "description"];
  const filteredProducts = data.products.filter((product) => {
    const shouldAddThisProduct = toSearch.some((actualSearchParam) => {
      const productKeyToValidate = product[actualSearchParam];
      if (typeof productKeyToValidate === "string") {
        return productKeyToValidate.toLocaleLowerCase().includes(searchParam.toLocaleLowerCase());
      }
    });
    return shouldAddThisProduct;
  });
  if (filteredProducts.length === 0) {
    return new Response(
      JSON.stringify(
        {
          error: "NO_ITEMS_FOUND"
        }
      ),
      {
        status: 404,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  }
  return new Response(JSON.stringify(filteredProducts), {
    status: 200,
    headers: {
      "Content-Type": "application/json"
    }
  });
};

export { GET, prerender };
