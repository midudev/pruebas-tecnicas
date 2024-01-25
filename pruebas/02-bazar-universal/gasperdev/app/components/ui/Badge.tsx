import clsx from "clsx"
import { Product } from "@/app/lib/types"

export default function Badge({ product }: { product: Product[] }) {
  return (
    <>
      {Array.from(new Set(product.map((product) => product.category))).map(
        (category) => {
          const productsInCategory = product.filter(
            (product) => product.category === category
          )
          const totalStock = productsInCategory.reduce(
            (total, product) => total + product.stock,
            0
          )

          const badgeClasses = clsx(
            "inline-block",
            "whitespace-nowrap",
            "rounded-md",
            "px-2",
            "py-2",
            "text-sm",
            "font-bold",
            "leading-none",
            "text-white",
            {
              "bg-red-700": category === "smartphones",
              "bg-green-700": category === "fragrances",
              "bg-blue-700": category === "laptops",
              "bg-yellow-700": category === "home-decoration",
              "bg-purple-700": category === "groceries",
              "bg-indigo-700": category === "skincare",
            }
          )

          // Define emoji icons for each category
          const categoryIcons: Record<string, string> = {
            smartphones: "📱",
            fragrances: "🌸",
            laptops: "💻",
            "home-decoration": "🏠",
            groceries: "🍎",
            skincare: "🧴",
          }

          return (
            <span className={badgeClasses} key={category}>
              {categoryIcons[category]} {category}-{totalStock}
            </span>
          )
        }
      )}
    </>
  )
}
