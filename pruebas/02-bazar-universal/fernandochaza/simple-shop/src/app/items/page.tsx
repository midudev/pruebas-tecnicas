import ProductCard from "@/components/ProductCard"
import Data from "../../data/products.json"
import SearchBar from "@/components/SearchBar"

const ResultsPage = ({ searchParams }: { searchParams: { search: string } }) => {
  const { search } = searchParams

  const results = Data.products.filter((product) =>
    product.title.toLowerCase().includes(search)
  )
  return (
    <div className="p-4 mb-24">
      <h1 className="font-sans text-lg ">Search results for "{search}"</h1>
      <h2>These are the results</h2>
      <section className="flex flex-col gap-y-8 mt-8">
        {results.map((product) => {
          return <ProductCard key={product.id} product={product} />
        })}
      </section>
      <div className="fixed inset-x-5 bottom-4 h-16">
        <SearchBar />
      </div>
    </div>
  )
}

export default ResultsPage
