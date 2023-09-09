import ProductCard from "@/components/ProductCard"
import SearchBar from "@/components/SearchBar"
import DynamicSearchBar from "@/components/DynamicSearchBar"
import PageWrapper from "@/components/PageWrapper"
import ItemsSection from "@/components/ItemsSection"
import { fetchItems } from "@/utils/fetchItems"
import { useEffect, useState } from "react"

const ResultsPage = async ({
  searchParams
}: {
  searchParams: { query: string }
}) => {
  const { query } = searchParams

  return (
    <PageWrapper>
      <main className="min-h-full p-4 mb-24 inset-0 bg-[radial-gradient(#dde0e2_1px,transparent_2px)] [background-size:28px_28px]">
        <h1 className="font-sans text-lg ">Search results for "{query}"</h1>
        <ItemsSection
          query={query}
          className="bg-transparent flex flex-col gap-y-8 mt-8 pb-24"
        />
        <DynamicSearchBar />
      </main>
    </PageWrapper>
  )
}

export default ResultsPage
