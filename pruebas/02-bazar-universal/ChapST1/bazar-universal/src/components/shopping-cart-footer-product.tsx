import { getProducts } from "@/services/get-products";
import { Product } from "@/types";

export async function ShoppingCartFooterProduct({ id }: { id: number }) {
	const {
		product: { thumbnail, title },
	}: { product: Product } = await getProducts({ id });

	return (
		<img
			className="w-10 h-10  border-2 border-white rounded-full dark:border-gray-800"
			src={thumbnail}
			alt={title}
		/>
	);
}
