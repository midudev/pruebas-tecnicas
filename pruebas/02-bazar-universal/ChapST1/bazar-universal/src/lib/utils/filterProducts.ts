import { products } from "../../../public/products.json";

export async function filterProducts({
	query,
	id,
}: { query?: string; id?: string; limit?: number }) {
	if (query) {
		return products.filter(({ title }) =>
			title.toLowerCase().includes(query?.toLowerCase()),
		);
	}

	if (id) {
		return products.find((item) => item.id === Number(id));
	}
}
