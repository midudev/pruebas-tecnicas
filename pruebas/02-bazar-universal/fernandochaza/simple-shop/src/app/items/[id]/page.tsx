import Link from "next/link"

import { type Product } from "@/lib/types"

import ProductRating from "@/components/products/ProductRating"

import { fetchProductById } from "@/utils/fetchProductById"

import ImageSlider from "@/components/products/ImageSlider"
import MainContainer from "@/components/generic/MainContainer"
import DynamicSearchBar from "@/components/search/DynamicSearchBar"
import AnimatedPageWrapper from "@/components/generic/AnimatedPageWrapper"
import Header from "@/components/header/Header"

const ProductPage = async ({
  params,
  searchParams
}: {
  params: { id: string }
  searchParams: { imgIndex?: string }
}) => {
  const id = Number(params.id)
  const isImgIndex = searchParams.imgIndex !== undefined
  const imgIndex = isImgIndex ? Number(searchParams.imgIndex) : 0

  const product: Product = await fetchProductById(id)
  if (product === null) return <p>Product not found</p>

  const { title, description, price, rating, stock, images, brand, category } =
    product
  const capitalizedTitle = title[0].toUpperCase() + title.slice(1)
  const capitalizedCategory = category[0].toUpperCase() + category.slice(1)

  const totalImages = images.length
  const lastIndex = totalImages - 1

  const stockMessage =
    stock > 0
      ? {
          message: `${stock} available`,
          style: "text-lime-600"
        }
      : {
          message: "Out of stock",
          style: "text-red-500"
        }

  const formattedPrice = price.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0
  })

  return (
    <AnimatedPageWrapper>
      <Header />
      <MainContainer>
        <article className="max-w-[340px] min-h-screen flex flex-col mx-auto">
          <Link
            href={`/items?category=${category}`}
            className="bg-slate-50 text-sm border w-fit rounded-full px-4 py-2 mt-4 text-blue-600"
          >
            {capitalizedCategory}
          </Link>
          <ImageSlider
            className="h-[300px] shrink-0 w-full mt-4 bg-contain bg-no-repeat bg-center duration-500 rounded-lg relative shadow-[5px_5px_10px_#b0b2b3,-5px_-5px_10px_#ffffff]"
            imageURLS={images}
            imgIndex={imgIndex}
            lastIndex={lastIndex}
          />
          <div className="flex flex-row mt-6">
            <h2 className="flex-1 w-1/2 text-xl font-extrabold">
              {capitalizedTitle}
            </h2>
            <p className="flex-2 text-end w-fit ml-2 font-extrabold text-xl px-2 rounded-xl text-lime-600">
              {formattedPrice}
            </p>
          </div>
          <p>{brand}</p>
          <p className="my-4 italic">{description}</p>
          <ProductRating
            className="h-8 w-30 my-2 mr-auto bg-slate-50"
            rating={rating}
          />
          <button
            disabled={stock > 0}
            aria-label="Add to cart"
            className="bg-slate-50 font-bold mt-4 p-2 rounded-full shadow-[5px_5px_10px_#b0b2b3,-5px_-5px_10px_#ffffff] disabled:active:shadow-none"
          >
            Add to Cart -
            <span className={stockMessage.style}> {stockMessage.message}</span>
          </button>
          <button
            disabled={stock > 0}
            aria-label="Buy now"
            className="bg-lime-500 font-bold my-4 p-2 rounded-full shadow-[3px_3px_6px_#b0b2b3,-3px_-3px_6px_#ffffff] disabled:active:shadow-none"
          >
            Buy Now
          </button>
        </article>
        <DynamicSearchBar />
      </MainContainer>
    </AnimatedPageWrapper>
  )
}

export default ProductPage
