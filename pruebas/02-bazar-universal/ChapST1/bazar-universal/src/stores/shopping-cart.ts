import { SHOPPING_CART_KEY } from "@/constants";
// import { createStore } from "zustand";
import createStore from "zustand";
// import { persist } from "zustand/middleware";

interface ShoppingCartProps {
	productsIds: number[];
	addId: (id: number) => void;
	removeId: (id: number) => void;
	removeAll: () => void;
}

export const useShoppingCartStore = createStore<ShoppingCartProps>(
	(set, get) => {
		return {
			productsIds: [],
			addId: (id: number) => {
				const { productsIds } = get();
				const newIds = [...productsIds].concat(id);
				set({ productsIds: newIds });
			},
			removeId: (id) => {
				const { productsIds } = get();
				const newIds = [...productsIds].filter((item) => item !== id);
				set({ productsIds: newIds });
			},
			removeAll: () => {
				set({ productsIds: [] });
			},
		};
	},
);

// export const useShoppingCartStore = createStore(
// 	persist<ShoppingCartProps>(
// 		(set, get) => {
// 			return {
// 				productsIds: [],
// 				addId: (id: number) => {
// 					const { productsIds } = get();
// 					const newIds = [...productsIds].concat(id);
// 					set({ productsIds: newIds });
// 				},
// 				removeId: (id) => {
// 					const { productsIds } = get();
// 					const newIds = [...productsIds].filter((item) => item !== id);
// 					set({ productsIds: newIds });
// 				},
// 			};
// 		},
// 		{
// 			name: SHOPPING_CART_KEY,
// 		},
// 	),
// );
