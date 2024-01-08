import { useShoppingCartStore } from "@/stores/shopping-cart";

export function useShoppingCart() {
	const { addId, productsIds, removeId, removeAll } = useShoppingCartStore();

	return {
		addProduct: addId,
		removeProduct: removeId,
		shoppingList: productsIds,
		removeAllProducts: removeAll,
	};
}
