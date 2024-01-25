import { StarIcon, HalfStarIcon } from "./ui/Icons"
import { Product } from "../lib/types"
import clsx from "clsx"
interface CardsProps {
  product: Product
  className?: string
  imgClassName?: string
}

export default function ProductView({
  product,
  className,
  imgClassName,
}: CardsProps) {
  return (
    <article
      className={clsx(
        `w-full items-center  inset-0 text-gray-700  mb-4 overflow-hidden rounded-lg border border-black/5 bg-gray-200/25 shadow-[0px_1px_2px_0px_rgba(0,_0,_0,_0.04)]`,
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

      <main className="flex flex-col w-full p-4">
        <h1 className="text-lg font-bold  ">{product.title}</h1>

        <h2 className="text-md font-bold text-gray-500 ">{product.brand}</h2>

        <p className="text-sm text-gray-600">{product.description}</p>

        <div className="flex items-center space-x-4">
          <div className=" flex flex-col mt-2 ">
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
          <span className=" text-center bg-gray-400/20 text-sm p-2 rounded-md">
            stock {product.stock}
          </span>
        </div>
        <footer className="flex mt-2">
          {Array.from({ length: Math.floor(product.rating) }, (_, index) => (
            <StarIcon key={index} className="text-yellow-400 h-6 w-6" />
          ))}
          {product.rating % 1 !== 0 && (
            <HalfStarIcon key="half-star" className="text-yellow-400 h-6 w-6" />
          )}
        </footer>
      </main>
    </article>
  )
}
