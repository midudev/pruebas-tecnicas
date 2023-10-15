export async function GET({ params, request }) {
    const res = await fetch('https://backend-prueba-tecnica-02.onrender.com/api/items?search=perfume&page=0');

    if (!res.ok) {
      return new Response(null, {
        status: 404,
        statusText: 'Not found'
      });
    }
    
    const products = await res.json()

    return new Response(
      JSON.stringify(products), {
        status: 200,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  }