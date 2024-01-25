import Container from "@/app/components/Container"
import LinkKeypress from "@/app/components/ui/LinkKeyPress"
import ProductosContainer from "@/app/components/ProductsViewContainer"
import Search from "@/app/components/ui/Search"
import { CardsSkeleton } from "@/app/components/ui/Skeletons"
import Link from "next/link"
import { Suspense } from "react"

interface Params {
  search?: string
  page?: string
}

interface PageProps {
  params: { id: number }
  searchParams?: Params
}

export default function Page({ params, searchParams }: PageProps) {
  const itemId = params.id

  // Extracting search and page from searchParams
  const query = searchParams?.search || ""
  const currentPage = Number(searchParams?.page) || 1
  return (
    <Container>
      <div className="w-full flex  mt-2 flex-col">
        <nav className="flex flex-col-2  gap-3 mb-4 items-center justify-between p-2 border-b ">
          <Search placeholder="laptops, smartphones, ..." />

          <LinkKeypress Links={`/items?search=${query}&page=${currentPage}`} />
        </nav>
        <Suspense fallback={<CardsSkeleton />}>
          <ProductosContainer itemId={itemId} />
        </Suspense>
      </div>
    </Container>
  )
}
