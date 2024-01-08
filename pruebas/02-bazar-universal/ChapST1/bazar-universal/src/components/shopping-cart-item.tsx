import { getFormatPrice } from "@/lib/utils/get-format-price";
import { getProducts } from "@/services/get-products";
import { Product } from "@/types";
import Link from "next/link";
import { DeleteIcon } from "./icons/delete-icon";
import { ShoppingCartItemBtn } from "./shopping-cart-item-btn";

export async function ShoppingCartItem({ id }: { id: number }) {
	const {
		product: { thumbnail, title, price, discountPercentage },
	}: { product: Product } = await getProducts({ id });

	const { newPrice } = getFormatPrice({
		price,
		discount: discountPercentage,
	});

	return (
		<div className="flex items-center justify-between w-full border border-input p-2 gap-1 hover:bg-accent rounded-md duration-300 my-2">
			<Link
				href={`/items/${id}`}
				className="flex items-center w-full flex-grow gap-1"
			>
				<picture className="w-16 h-9  block">
					<img
						className="w-full last:h-full object-cover"
						src={thumbnail}
						alt={title}
					/>
				</picture>
				<div className="w-full">
					<h3 className="w-[85%] line-clamp-1">{title}</h3>
					<span>{newPrice}</span>
				</div>
			</Link>

			<ShoppingCartItemBtn id={id} />
		</div>
	);
}
