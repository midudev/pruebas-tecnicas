import { type Product } from "@/lib/types"

import ProductRating from "@/components/products/ProductRating"
import AddToCartIcon from "@/icons/AddToCartIcon"

import Data from "../../../data/products.json"
// import { fetchProductById } from "@/utils/fetchProductById"
import Link from "next/link"
import { fetchProductById } from "@/utils/fetchProductById"
import PreviousChevron from "@/icons/PreviousChevron"
import NextChevron from "@/icons/NextChevron"
import ImageSlider from "@/components/products/ImageSlider"

const ProductPage = async ({
  params,
  searchParams
}: {
  params: { id: string }
  searchParams: {
    [key: string]: string | string[] | undefined
  }
}) => {
  const id = Number(params.id)
  const imgIndex = Number(searchParams.imgIndex) || 0

  const product: Product = await fetchProductById(id)
  if (!product) return <p>Product not found</p>

  const { title, description, price, rating } = product
  const capitalizedTitle = title[0].toUpperCase() + title.slice(1)

  const imageURLS = product.images
  const totalImages = imageURLS.length
  const lastIndex = totalImages - 1

  return (
    <article className="max-w-[340px] flex flex-col mx-auto">
      <ImageSlider
        className="h-[300px] w-full mb-4 bg-contain bg-no-repeat bg-center duration-500 border rounded-b-lg relative"
        imageURLS={imageURLS}
        imgIndex={imgIndex}
        lastIndex={lastIndex}
      />
      <h2 className="pl-2 text-2xl font-extrabold line-clamp-2 overflow-hidden">
        {capitalizedTitle}
      </h2>
    </article>
  )
}

export default ProductPage
