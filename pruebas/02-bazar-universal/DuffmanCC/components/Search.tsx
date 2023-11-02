"use client";

import { CartContext } from "@/context/cart";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useContext, useMemo, useState } from "react";
import { CartIcon, SearchIcon, Truck } from "./Icons";

export default function Search() {
  const [search, setSearch] = useState<string>("");
  const { productsInCart, setShowCart, showCart } = useContext(CartContext);
  const router = useRouter();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();

    const query = e.target.value.toLowerCase();

    setSearch(query);

    router.push(`/items?search=${query}`);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  const totalItems = useMemo(() => {
    if (productsInCart.length === 0) {
      return 0;
    }

    return productsInCart.reduce((a, b) => a + b.quantity, 0);
  }, [productsInCart]);

  return (
    <div className="flex gap-4 items-center justify-center md:justify-between relative">
      <Link href="/">
        <Truck width="50" />
      </Link>

      <form onSubmit={handleSubmit} className="flex w-full max-w-sm relative">
        <input
          type="search"
          onChange={handleChange}
          value={search}
          className="pl-4 pr-10 py-2 rounded border bg-gray-100 w-full"
          placeholder="laptops, smartphones..."
        />

        <SearchIcon width="25" className="absolute right-3 top-2" />
      </form>

      <div className="relative z-50 right-4">
        <button onClick={() => setShowCart(!showCart)}>
          <CartIcon width="50" className="" />
        </button>

        {productsInCart.length > 0 && (
          <div className="absolute top-0 right-0 rounded-full border w-6 h-6 flex justify-center items-center bg-blue-500 text-white text-xs">
            {totalItems}
          </div>
        )}
      </div>
    </div>
  );
}
