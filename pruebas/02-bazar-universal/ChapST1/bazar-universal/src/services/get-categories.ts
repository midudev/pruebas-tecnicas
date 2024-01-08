import { Product } from "@/types";

interface GetCategoriesProps {
	byArr?: Product[];
}

export function getCategories({ byArr }: GetCategoriesProps) {
	if (byArr) {
		const categories = byArr.map(({ category }) => category);
		const notRepeatCategories = new Set([...categories]);

		return Array.from(notRepeatCategories);
	}
}
