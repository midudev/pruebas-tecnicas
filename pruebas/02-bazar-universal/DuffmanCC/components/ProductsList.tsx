"use client";

import { CartContext } from "@/context/cart";
import { Product } from "@/types";
import Link from "next/link";
import { useContext } from "react";
import { AddToCartIcon } from "./Icons";
import ProductCard from "./ProductCard";

interface Props {
  items: Product[];
}

export default function ProductsList({ items }: Props) {
  const { addProductToCart } = useContext(CartContext);

  function handleClick(item: Product) {
    addProductToCart(item);
  }

  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {items.map((item) => (
        <li className="relative pr-10" key={item.id}>
          <Link href={`/items/${item.id}`}>
            <ProductCard product={item} key={item.id} />
          </Link>

          <button
            className="absolute right-0 top-0 z-10 border rounded-full w-10 h-10 flex justify-center items-center"
            onClick={() => handleClick(item)}
          >
            <AddToCartIcon width="30" />
          </button>
        </li>
      ))}
    </ul>
  );
}
