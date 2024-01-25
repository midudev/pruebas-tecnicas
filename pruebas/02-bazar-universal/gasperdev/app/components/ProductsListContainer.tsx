import { getProductsBySearch, getTotalPagesProducts } from "../lib/data"
import ProductsList from "./ProductsList"
import Badge from "./ui/Badge"
import Pagination from "./ui/pagination"

interface Props {
  searchProducts?: string
  currentPage?: number
}

export default async function ProductsContainer({
  searchProducts,
  currentPage,
}: Props) {
  const products = await getProductsBySearch({ searchProducts, currentPage })
  const { totalPages, itemCount } = await getTotalPagesProducts({
    searchProducts,
  })

  return (
    <section className="mt-20">
      <header>
        <h2 className="text-lg font-semibold">
          Resultados de búsqueda de {searchProducts}: {itemCount}
        </h2>

        <div className=" flex items-center space-x-2 p-2 rounded-md mb-4 my-2overflow-x-auto overflow-scroll">
          <Badge product={products} />
        </div>
      </header>
      <main>
        {products.map((product) => (
          <ProductsList
            key={product.id}
            product={product}
            search={searchProducts}
          />
        ))}
      </main>
      <footer className=" flex justify-center ">
        <Pagination totalPages={totalPages} />
      </footer>
    </section>
  )
}
