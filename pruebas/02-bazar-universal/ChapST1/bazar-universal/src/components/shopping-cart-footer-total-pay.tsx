import { calculateDiscount, formatPrice } from "@/lib/utils/get-format-price";
import { getProducts } from "@/services/get-products";
import { Product } from "@/types";

export async function ShoppingCartFooterTotalPay({
	shoppingList,
}: { shoppingList: number[] }) {
	const arrPromises = shoppingList.map((item) => getProducts({ id: item }));
	const promises = await Promise.all(arrPromises);

	const prices = promises.map(({ product }: { product: Product }) => {
		const { discountPercentage, price } = product;
		return calculateDiscount({ price, discount: discountPercentage });
	});

	let pay = 0;

	for (const i of prices) {
		pay = pay + i;
	}

	return <div>{formatPrice(pay)}</div>;
}
