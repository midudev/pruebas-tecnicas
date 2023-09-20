import Image from "next/image"
import Link from "next/link"

import ProductRating from "./ProductRating"
import AddToCartIcon from "@/icons/AddToCartIcon"

import { type Product } from "@/lib/types"
import CategoryButton from "./CategoryButton"

const ProductCard = ({ product }: { product: Product }) => {
  const { title, description, price, rating, id, category, images, brand } =
    product

  const capitalizedTitle = title[0].toUpperCase() + title.slice(1)
  const capitalizedCategory = category[0].toUpperCase() + category.slice(1)
  const formattedPrice = price.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0
  })

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
  }

  return (
    <Link href={`/items/${id}`} className="w-fit mx-auto z-0">
      <article className="bg-slate-50 grid grid-cols-2 auto-rows-min gap-y-2 gap-x-2 relative w-100 max-w-[348px] h-fit mx-auto px-4 py-4 shadow-[5px_5px_20px_#b0b2b3,-5px_-5px_20px_#ffffff] rounded-3xl">
        <div>
          <h2 className="min-h-[2rem] col-span-full pl-4 text-lg font-extrabold w-60 line-clamp-2 overflow-hidden">
            {capitalizedTitle}
          </h2>
          <p className="min-h-[2rem] flex flex-col pl-4 text-sm justify-center">
            {brand}
          </p>
        </div>
        <div className="w-[132px] h-[132px] relative mx-auto row-start-2">
          <Image
            className="absolute object-contain rounded-2xl border place-self-center"
            src={images[0]}
            alt={`Image of ${title}`}
            fill={true}
            sizes="(max-width: 576px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
          />
        </div>
        <p className="row-start-2 place-self-center line-clamp-4 overflow-hidden max-h-24">
          {description}
        </p>
        <p className="absolute bg-white border rounded-lg py-1 px-2 right-4 top-4 text-lg font-extrabold text-blue-800">
          {formattedPrice}
        </p>
        <ProductRating
          rating={rating}
          className="row-start-3 place-self-center my-2"
        />
        <CategoryButton
          className="row-start-1 col-start-2 text-sm border w-fit rounded-full px-2 h-fit ml-auto mt-auto mb-1"
          category={capitalizedCategory}
        />
        <button
          aria-label="Add to cart"
          onClick={handleClick}
          className="z-10 absolute right-4 bottom-4 rounded-full w-12 h-12 flex flex-col place-items-center place-content-center shadow-[3px_3px_3px_#b0b2b3,-3px_-3px_3px_#ffffff] active:border active:shadow-none transition-shadow duration-50"
        >
          <AddToCartIcon />
        </button>
      </article>
    </Link>
  )
}

export default ProductCard
