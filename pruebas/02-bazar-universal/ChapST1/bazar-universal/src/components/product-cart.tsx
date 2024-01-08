"use client";

import { useEffect, useState } from "react";
import { CartIcon } from "./icons/cart";
import { toast } from "sonner";
import { useShoppingCart } from "@/hooks/use-shopping-cart";

export function ProductCart({ id }: { id: number }) {
	const [active, setActive] = useState(false);
	const { addProduct, removeProduct, shoppingList } = useShoppingCart();

	const style = `${active ? "bg-accent" : "bg-transparent"}`;

	const handleClick: () => void = () => {
		if (!active) {
			toast.success("Item in shopping cart!");
		}

		setActive(!active);
	};

	useEffect(() => {
		if (!active) {
			removeProduct(id);
			return;
		}

		addProduct(id);
	}, [active]);

	useEffect(() => {
		const isActive = shoppingList.find((item) => item === id) ?? false;

		if (isActive) {
			setActive(true);
		}
	}, [shoppingList]);
	return (
		<div
			className={`absolute top-3 right-3 size-9 flex items-center justify-center border border-input rounded-sm  cursor-pointer ${style}`}
			onClick={handleClick}
		>
			{active ? <CartIcon /> : <CartIcon />}
		</div>
	);
}
