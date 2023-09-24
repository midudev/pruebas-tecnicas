import { persistentAtom } from '@nanostores/persistent'
import { atom } from 'nanostores'

export const isCartOpen = atom(false)

export type CartItem ={
  id: number,
  name: string,
  imageSrc: string,
  quantity: number,
  price: number
}

export type CartItemDisplayInfo = Pick<CartItem, 'id' | 'name' | 'imageSrc' | 'price'>;

export type StoreValue= {
  cartItem: CartItem
}

export const cartItems = persistentAtom<CartItem[]>('cartItems', [], {
  encode: JSON.stringify,
  decode: JSON.parse
})

export function addCartItem ({ id, name, imageSrc, price } : CartItemDisplayInfo) {
  const cartStore = cartItems.get()
  const existingItem = cartStore.findIndex(item => item.id === id)
  if (existingItem !== -1) {
    const newStore = window.structuredClone(cartStore)
    newStore[existingItem].quantity += 1
    cartItems.set(newStore)
    return
  }
  const newProduct = {
    id,
    name,
    imageSrc,
    quantity: 1,
    price
  }
  cartItems.set([
    ...cartStore,
    newProduct
  ])
}


