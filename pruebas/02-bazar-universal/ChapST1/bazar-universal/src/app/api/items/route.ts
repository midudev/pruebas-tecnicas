import { filterProducts } from "@/lib/utils/filterProducts";
import { getQueryParams } from "@/lib/utils/getQueryParams";
import { getPagination } from "@/lib/utils/api-pagination";
import { Product } from "@/types";
import { NextResponse } from "next/server";

export async function GET(req: Request, res: Response) {
	const params = getQueryParams({ url: req.url });
	const query = params.get("query");
	const page = params.get("page") ?? 1;

	if (!query) return NextResponse.json({ products: [] });

	const filteredProducts = await filterProducts({ query });

	const { currentPage, products, totalPages } = getPagination({
		page: Number(page),
		filteredProducts: filteredProducts as Product[],
	});

	return NextResponse.json({
		products,
		currentPage,
		totalPages,
	});
}
