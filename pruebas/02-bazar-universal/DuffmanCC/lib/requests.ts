export async function fetchSingleProduct(id: number) {
  try {
    const res = await fetch(`${process.env.HOST}/api/items/${id}`, {
      next: {
        revalidate: 60,
      },
    });

    if (!res.ok) return;

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}

export async function fetchProducts(query: string) {
  try {
    const res = await fetch(`${process.env.HOST}/api/items?search=${query}`);

    if (!res.ok) return;

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}
