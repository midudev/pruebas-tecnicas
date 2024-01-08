import { ProductDetails } from "@/components/product-details";
import { getProducts } from "@/services/get-products";

export default async function ItemsDetailPage({
	params: { id },
}: { params: { id: string } }) {
	const { product } = await getProducts({ id: Number(id) });

	if (!product) return null;
	return <ProductDetails product={product} />;
}
