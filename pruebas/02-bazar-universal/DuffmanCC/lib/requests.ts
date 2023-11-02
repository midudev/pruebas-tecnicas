function getBaseUrl() {
  if (process.env.NODE_ENV === "development") {
    return process.env.HOST_DEV;
  } else {
    return process.env.HOST_PROD;
  }
}

export async function fetchSingleProduct(id: number) {
  try {
    const baseUrl = getBaseUrl();
    const res = await fetch(`${baseUrl}/api/items/${id}`, {
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
    const baseUrl = getBaseUrl();
    const res = await fetch(`${baseUrl}/api/items?search=${query}`);

    if (!res.ok) return;
    return await res.json();
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}
