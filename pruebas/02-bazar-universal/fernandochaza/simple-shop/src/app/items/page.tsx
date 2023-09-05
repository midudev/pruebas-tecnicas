import ProductCard from "@/components/ProductCard"
import Data from "../../data/products.json"
import SearchBar from "@/components/SearchBar"

const ResultsPage = ({ searchParams }: { searchParams: { search: string } }) => {
  const { search } = searchParams

  const results = Data.products.filter((product) =>
    product.title.toLowerCase().includes(search)
  )
  return (
    <main className="min-h-full p-4 mb-24 inset-0 bg-[radial-gradient(#dde0e2_1px,transparent_2px)] [background-size:28px_28px]">
      <h1 className="font-sans text-lg ">Search results for "{search}"</h1>
      <section className="bg-transparent flex flex-col gap-y-8 mt-8 pb-24">
        {results.map((product) => {
          return <ProductCard key={product.id} product={product} />
        })}
      </section>
      <div className="fixed inset-x-5 bottom-4 h-16">
        <SearchBar />
      </div>
    </main>
  )
}

export default ResultsPage
