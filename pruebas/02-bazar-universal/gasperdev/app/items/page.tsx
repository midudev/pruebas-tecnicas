import Container from "@/app/components/Container"
import Navbar from "@/app/components/ui/Navbar"
import ProductsListContainer from "@/app/components/ProductsListContainer"
import { Suspense } from "react"
import { CardsSkeleton } from "@/app/components/ui/Skeletons"

interface Params {
  searchParams?: { search?: string; page?: string }
}

export default function Page({ searchParams }: Params) {
  const query = searchParams?.search || ""
  const currentPage = Number(searchParams?.page) || 1

  return (
    <>
      <Navbar />
      <Container>
        <div className="w-full flex mt-2 flex-col">
          <Suspense key={query} fallback={<CardsSkeleton />}>
            <ProductsListContainer
              searchProducts={query}
              currentPage={currentPage}
            />
          </Suspense>
        </div>
      </Container>
    </>
  )
}
