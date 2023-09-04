import ProductCard from "@/components/ProductCard"
import Data from "../../data/products.json"

const ResultsPage = ({ searchParams }: { searchParams: { query: string } }) => {
  const { query } = searchParams

  const results = Data.products.filter((product) =>
    product.title.toLowerCase().includes(query)
  )
  return (
    <>
      <h1>Search results for "{query}"</h1>
      <h2>These are the results</h2>
      {results.map((product) => {
        return <ProductCard key={product.id} product={product} />
      })}
    </>
  )
}

export default ResultsPage
