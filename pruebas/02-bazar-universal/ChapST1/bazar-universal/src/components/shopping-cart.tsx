"use client";

import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "./ui/button";
import { CartIcon } from "./icons/cart";
import { useShoppingCart } from "@/hooks/use-shopping-cart";
import { ShoppingCartItem } from "./shopping-cart-item";
import { Suspense } from "react";
import { ShoppingCartItemSkeleton } from "./skeletons/shopping-cart-item-skeleton";
import { ScrollArea } from "./ui/scroll-area";
import { ShoppingCartFooter } from "./shopping-cart-footer";
import { toast } from "sonner";
import { ShoppingCartPayBtn } from "./shopping-cart-pay-btn";

export function ShoppingCart() {
	const { shoppingList } = useShoppingCart();

	const styles =
		shoppingList.length !== 0
			? "after:visible after:animate-pulse"
			: "after:invisible after:animate-none";

	return (
		<Drawer>
			<DrawerTrigger
				className={`inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 relative w-10 after:content-[''] after:size-3 after:rounded-full after:bg-accent-foreground after:absolute after:top-[-4px] after:right-[-4px] ${styles}`}
			>
				<CartIcon />
			</DrawerTrigger>
			<DrawerContent>
				<div className="w-[300px] m-auto py-3">
					<DrawerHeader>
						<DrawerTitle className="text-center">Shopping Cart</DrawerTitle>
						{shoppingList.length === 0 ? (
							<h2 className="text-center">Your shopping cart is empty!</h2>
						) : (
							""
						)}

						<ScrollArea className="mt-3 max-h-[300px]">
							{shoppingList.map((item) => (
								<Suspense key={item} fallback={<ShoppingCartItemSkeleton />}>
									<ShoppingCartItem id={item} />
								</Suspense>
							))}
						</ScrollArea>
					</DrawerHeader>
					<DrawerFooter>
						<ShoppingCartFooter />
						<ShoppingCartPayBtn />
						<DrawerClose>
							<Button variant="outline">Cancel</Button>
						</DrawerClose>
					</DrawerFooter>
				</div>
			</DrawerContent>
		</Drawer>
	);
}
