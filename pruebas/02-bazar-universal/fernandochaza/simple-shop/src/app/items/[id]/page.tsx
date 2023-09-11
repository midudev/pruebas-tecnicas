import Image from "next/image"

import { type Product } from "@/lib/types"

import ProductRating from "@/components/products/ProductRating"
import AddToCartIcon from "@/icons/AddToCartIcon"

import Data from "../../../data/products.json"
import { fetchProductById } from "@/utils/fetchProductById"

const ProductPage = async ({ params }: { params: { id: string } }) => {
  const id = Number(params.id)

  const product: Product = await fetchProductById(id)

  if (!product) return <p>Product not found</p>

  const { title, description, price, rating } = product

  const capitalizedTitle = title[0].toUpperCase() + title.slice(1, -1)

  return (
    <h2 className="col-span-full pl-4 text-2xl font-extrabold w-60 line-clamp-2 overflow-hidden">
      {capitalizedTitle}
    </h2>
  )
}

export default ProductPage
