import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { getProduct } from '@utils/getProduct'

export const useCartStore = create(persist(
  (set, get) => ({
    cart: [],
    add: async (id) => {
      const product = await getProduct(id);
      if (!get().cart.some(product => product.id === id)) {
        set((state) => ({
          cart: [...state.cart, product]
        }))
      }
    },
    remove: (id) => (
      set((state) => ({
        cart: state.cart.filter(product => product.id !== id)
      }))
    ),
    clean: () => (
      set(() => ({
        cart: []
      }))
    )
  }), {
    name: 'cart'
  }
))