import { Product } from "@/types";

const limit = 5;

export function getPagination({
	page = 1,
	filteredProducts,
}: { page: number; filteredProducts: Product[] }) {
	const productsCount = filteredProducts.length;
	const totalPage = Math.round(productsCount / limit);
	const currentPage = page;
	const jump = currentPage * limit - 5;
	const newProducts = filteredProducts.slice(jump, limit * page);

	return {
		products:newProducts,
		totalPages: totalPage,
		currentPage: currentPage,
	};
}
