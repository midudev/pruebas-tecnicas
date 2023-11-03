"use client";

import Rating from "@/components/Rating";
import { CartContext } from "@/context/cart";
import { toDollar } from "@/lib/tools";
import { Product } from "@/types";
import Image from "next/image";
import { useContext } from "react";

interface Props {
  product: Product;
}

export default function SingleProduct({ product }: Props) {
  const { addProductToCart } = useContext(CartContext);

  return (
    <article className="flex flex-col items-center gap-6">
      <div className="flex gap-8">
        <div className="aspect-square rounded-full overflow-hidden">
          <Image
            src={product.thumbnail}
            alt={product.title}
            width="150"
            height="150"
            className="object-cover h-full w-auto"
          />
        </div>

        <div className="flex flex-col justify-between">
          {product.images.slice(0, 3).map((img, index) => (
            <Image
              key={index}
              src={img}
              alt={product.title}
              width="100"
              height="100"
              className="object-cover h-12 w-12 rounded-full overflow-hidden"
            />
          ))}
        </div>
      </div>

      <h1 className="font-bold text-3xl text-center">
        {product.title} - {product.brand}
      </h1>

      <div className="font-bold flex gap-4 items-center">
        <div className="flex flex-col items-center">
          <div className="text-xl">{toDollar(product.price)}</div>

          <div className="text-xs">
            {product.stock} {product.stock > 1 ? "disponibles" : "disponible"}
          </div>
        </div>

        <Rating rating={product.rating} />
      </div>

      <p>{product.description}</p>

      <button
        className="px-12 py-2 rounded-3xl border bg-purple-300 text-xl font-light"
        onClick={() => addProductToCart(product)}
      >
        Comprar
      </button>
    </article>
  );
}
