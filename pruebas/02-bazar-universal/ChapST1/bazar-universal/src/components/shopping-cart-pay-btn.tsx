import { toast } from "sonner";
import { Button } from "./ui/button";
import confetti from "canvas-confetti";
import { useShoppingCart } from "@/hooks/use-shopping-cart";

export function ShoppingCartPayBtn() {
	const { removeAllProducts, shoppingList } = useShoppingCart();
	const handleToBuy = () => {
		removeAllProducts();

		toast.success("Thanks for your purchase!!");
		confetti();
	};

	return (
		<Button disabled={shoppingList.length === 0} onClick={handleToBuy}>
			Buy
		</Button>
	);
}
