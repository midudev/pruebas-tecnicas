import { StarIcon, HalfStarIcon } from "./ui/Icons"
import { Product } from "../lib/types"
import Link from "next/link"
import clsx from "clsx"
interface Props {
  product: Product
  className?: string
  imgClassName?: string
  search?: string
}

export default function Cards({
  product,
  className,
  imgClassName,
  search,
}: Props) {
  return (
    <article>
      <Link
        href={`/items/${product.id}?search=${search}`}
        className={clsx(
          `w-full flex p-2 py-4 items-center space-x-4 inset-0 text-gray-700  mb-4 overflow-hidden rounded-lg border border-black/5 bg-gray-200/25 shadow-[0px_1px_2px_0px_rgba(0,_0,_0,_0.04)]`,
          className
        )}
      >
        <img
          alt={product.title}
          className={clsx(
            ` h-[100px] w-[100px] rounded-full object-cover `,
            imgClassName
          )}
          height="100"
          src={product.thumbnail} // Puedes usar la URL de la imagen del producto
          style={{
            aspectRatio: "100/100",
            objectFit: "cover",
          }}
          width="100"
        />

        <main className="flex flex-col">
          <h1 className="text-lg font-bold ">{product.title}</h1>

          <p className="text-sm text-gray-600 line-clamp-3 lg:line-clamp-none">
            {product.description}
          </p>

          <div className="flex items-center space-x-4">
            <div className=" flex flex-col">
              <span
                className={`text-md font-bold ${
                  product.discountPercentage
                    ? "text-decoration-line: line-through"
                    : ""
                }`}
              >
                ${product.price.toFixed(2)}
              </span>

              {product.discountPercentage && product.discountPercentage > 0 && (
                <span className="text-md font-bold">
                  $
                  {(
                    (product.price * (100 - product.discountPercentage)) /
                    100
                  ).toFixed(2)}
                </span>
              )}
            </div>

            <span className=" text-green-500">
              {product.discountPercentage}% OFF
            </span>
          </div>
          <footer className="flex">
            {Array.from({ length: Math.floor(product.rating) }, (_, index) => (
              <StarIcon key={index} className="text-yellow-400 h-6 w-6" />
            ))}
            {product.rating % 1 !== 0 && (
              <HalfStarIcon
                key="half-star"
                className="text-yellow-400 h-6 w-6"
              />
            )}
          </footer>
        </main>
      </Link>
    </article>
  )
}
