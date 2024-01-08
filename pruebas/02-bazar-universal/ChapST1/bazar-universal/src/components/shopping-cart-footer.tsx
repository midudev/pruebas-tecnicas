import { useShoppingCart } from "@/hooks/use-shopping-cart";
import { ShoppingCartFooterProduct } from "./shopping-cart-footer-product";
import { Suspense } from "react";
import { ShoppingCartFooterProductSkeleton } from "./skeletons/shopping-cart-footer-product-skeleton";
import { ShoppingCartFooterTotalPay } from "./shopping-cart-footer-total-pay";

export function ShoppingCartFooter() {
	const { shoppingList } = useShoppingCart();
	const length = shoppingList.length - 3;
	const styles = length <= 0 ? "hidden" : "flex";

	return (
		<div className="flex items-center justify-between gap-3">
			<div className="flex -space-x-4 rtl:space-x-reverse">
				{shoppingList.slice(0, 3).map((item) => (
					<Suspense fallback={<ShoppingCartFooterProductSkeleton />}>
						<ShoppingCartFooterProduct key={item} id={item} />
					</Suspense>
				))}
				<div
					className={` items-center relative z-10 justify-center w-10 h-10 text-xs font-medium rounded-full bg-background border-2 border-input ${styles}`}
				>
					+{length}
				</div>
			</div>

			<Suspense fallback={<span>loading...</span>}>
				<ShoppingCartFooterTotalPay shoppingList={shoppingList} />
			</Suspense>
		</div>
	);
}
