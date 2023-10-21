import { products } from "@utils/products.json";

export async function GET({ params, request }) {
    const {id} = params

    if(isNaN(id)) {
        return new Response(
            JSON.stringify({
                message: "Invalid id parameter"
            }), {
              status: 400,
              headers: {
                "Content-Type": "application/json"
              }
            }
          );
    } else {
      const product = products.find((product) => product.id === Number(id))

      return new Response(
        JSON.stringify({product}), {
          status: 200,
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
    }

    
  }