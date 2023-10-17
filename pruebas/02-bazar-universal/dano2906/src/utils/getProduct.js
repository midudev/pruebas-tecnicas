export const getProduct = async (id) => {
    const res = await fetch(`/api/items/${id}/data.json`);
    const data = await res.json();
    return data.product;
}