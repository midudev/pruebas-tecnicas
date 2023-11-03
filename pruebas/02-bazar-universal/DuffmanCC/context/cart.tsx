import { createContext, useState } from "react";
import { Product } from "../types";

export const CartContext = createContext({
  productsInCart: [] as Item[],
  addProductToCart: (product: Product) => {},
  showCart: false,
  setShowCart: (show: boolean) => {},
  addQuantity: (product: Product) => {},
  removeQuantity: (product: Product) => {},
  removeFromCart: (product: Product) => {},
  clearCart: () => {},
});

interface CartProviderProps {
  children: React.ReactNode;
}

type Item = {
  product: Product;
  quantity: number;
};

export function CartProvider({ children }: CartProviderProps) {
  const [productsInCart, setProductsInCart] = useState<Item[]>([]);

  const [showCart, setShowCart] = useState(false);

  function addProductToCart(product: Product) {
    const arr = [...productsInCart];

    const prod = arr.find((item) => item.product.id === product.id);
    const prodIndex = arr.findIndex((item) => item.product.id === product.id);

    if (prod === undefined) {
      arr.push({ product, quantity: 1 });
    } else {
      arr.splice(prodIndex, 1, { product, quantity: prod.quantity + 1 });
    }

    setProductsInCart(arr);
  }

  function addQuantity(product: Product) {
    const arr = [...productsInCart];

    const prod = arr.find((item) => item.product.id === product.id);

    if (prod === undefined) {
      return;
    }

    const prodIndex = arr.findIndex((item) => item.product.id === product.id);

    arr.splice(prodIndex, 1, { product, quantity: prod.quantity + 1 });

    setProductsInCart(arr);
  }

  function removeQuantity(product: Product) {
    const arr = [...productsInCart];

    const prod = arr.find((item) => item.product.id === product.id);

    if (prod === undefined) {
      return;
    }

    const prodIndex = arr.findIndex((item) => item.product.id === product.id);

    if (prod.quantity === 1) {
      removeFromCart(product);
      return;
    }

    arr.splice(prodIndex, 1, { product, quantity: prod.quantity - 1 });

    setProductsInCart(arr);
  }

  function removeFromCart(product: Product) {
    const arr = productsInCart.filter((el) => el.product.id !== product.id);

    setProductsInCart(arr);
  }

  function clearCart() {
    setProductsInCart([]);
  }

  return (
    <CartContext.Provider
      value={{
        productsInCart,
        addProductToCart,
        showCart,
        setShowCart,
        addQuantity,
        removeQuantity,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
