import { API_URL, PRODUCTS_ENDPOINT } from "./config";

interface getProductsProps {
	keyword?: string;
	id?: number;
	page?: number;
}

export async function getProducts({
	id,
	keyword = "phone",
	page,
}: getProductsProps) {
	const url = id
		? `${API_URL}/${PRODUCTS_ENDPOINT}/${id}`
		: `${API_URL}/${PRODUCTS_ENDPOINT}?query=${keyword}&page=${page}`;

	try {
		const res = await fetch(url);
		const json = await res.json();
		return json;
	} catch (error) {}
}
