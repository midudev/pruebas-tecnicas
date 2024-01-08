import { filterProducts } from "@/lib/utils/filterProducts";
import {} from "next";
import { NextResponse } from "next/server";

export async function GET(
	req: Request,
	{ params: { id } }: { params: { id: string } },
	res: Response,
) {
	const product = await filterProducts({ id });

	return NextResponse.json({
		product,
	});
}
