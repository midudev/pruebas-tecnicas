"use client";

import { Cart } from "@/components/Cart";
import Header from "@/components/Header";
import { CartProvider } from "@/context/cart";

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CartProvider>
      <div className="flex flex-col gap-8 w-full relative p-4">
        <Cart />

        <Header />

        {children}
      </div>
    </CartProvider>
  );
}
