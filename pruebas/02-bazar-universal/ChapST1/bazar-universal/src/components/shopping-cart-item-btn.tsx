"use client";

import { useShoppingCart } from "@/hooks/use-shopping-cart";
import { DeleteIcon } from "./icons/delete-icon";
import { toast } from "sonner";

export function ShoppingCartItemBtn({ id }: { id: number }) {
	const { removeProduct } = useShoppingCart();

	const handleClick = () => {
		removeProduct(id);
		toast.success("The article has been removed");
	};

	return (
		<button
			className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input p-2 hover:bg-background	hover:text-destructive"
			onClick={handleClick}
		>
			<DeleteIcon />
		</button>
	);
}
