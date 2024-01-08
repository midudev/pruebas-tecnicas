import { ListOfProducts } from "@/components/list-of-products";
import { NavBar } from "@/components/nav-bar";
import { ProductsPagination } from "@/components/pagination";
import { ResultsInfo } from "@/components/results-info";
import { getProducts } from "@/services/get-products";
import { Product } from "@/types";

interface FetchProps {
	products: Product[];
	page: string | number;
	totalPages: number;
}
export default async function ItemsPage({
	searchParams: { search, page = 1 },
}: { searchParams: { search: string; page: string | number } }) {
	const { products, totalPages }: FetchProps = await getProducts({
		keyword: search,
		page: Number(page),
	});

	return (
		<div>
			<ResultsInfo query={search} products={products} />

			<ListOfProducts products={products} />
			{products.length !== 0 && (
				<ProductsPagination
					currentPage={Number(page)}
					totalPages={totalPages}
					query={search}
				/>
			)}
		</div>
	);
}
