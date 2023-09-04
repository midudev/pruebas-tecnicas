import ProductCard from "@/components/ProductCard"
import Data from "../../data/products.json"

const ResultsPage = ({ searchParams }: { searchParams: { query: string } }) => {
  const { query } = searchParams

  const results = Data.products.filter((product) =>
    product.title.toLowerCase().includes(query)
  )
  return (
    <div className="p-4">
      <h1 className="font-sans text-lg ">Search results for "{query}"</h1>
      <h2>These are the results</h2>
      <section className="flex flex-col gap-y-8 mt-8">
        {results.map((product) => {
          return <ProductCard key={product.id} product={product} />
        })}
      </section>
    </div>
  )
}

export default ResultsPage
