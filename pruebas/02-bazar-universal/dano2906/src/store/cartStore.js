import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useCartStore = create(persist(
  (set, get) => ({
    cart: [],
    add: (id) => {
      if (!get().cart.some(instance => instance === id)) {
        set((state) => ({
          cart: [...state.cart, id]
        }))
      }
    },
    remove: (id) => (
      set((state) => ({
        cart: state.cart.filter(instance => instance !== id)
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