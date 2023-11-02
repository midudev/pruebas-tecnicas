export async function fetchSingleProduct(id: number) {
  try {
    const res = await fetch(`http://localhost:3000/api/items/${id}`, {
      next: {
        revalidate: 60,
      },
    });

    if (!res.ok) return;
    return await res.json();
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}

export async function fetchProducts(query: string) {
  try {
    const res = await fetch(`http://localhost:3000/api/items?search=${query}`);

    if (!res.ok) return;
    return await res.json();
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}
