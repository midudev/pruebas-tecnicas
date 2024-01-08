"use client";

import { getCategories } from "@/services/get-categories";
import { Product } from "@/types";
import { Badge } from "./ui/badge";
import { useShoppingCart } from "@/hooks/use-shopping-cart";

interface ResultsProps {
	query: string;
	products: Product[];
}

export function ResultsInfo({ query, products }: ResultsProps) {
	const length = products?.length;
	const categories = getCategories({ byArr: products });
	const { shoppingList } = useShoppingCart();

	return (
		<div>
			<p className="text-center py-3 text-2xl">
				<span className="font-bold">{length}</span> Resultados para
				<span className="font-bold"> "{query}"</span>
			</p>

			<div className="flex items-center justify-start text-nowrap md:justify-center gap-4 py-3 overflow-x-auto">
				{categories?.map((item) => {
					const items = products.filter(
						({ category }) => category === item,
					).length;

					return (
						<Badge key={item}>
							{item} 👉 {items}
						</Badge>
					);
				})}
			</div>
		</div>
	);
}
