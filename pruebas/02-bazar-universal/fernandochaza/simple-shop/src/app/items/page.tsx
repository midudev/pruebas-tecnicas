import AnimatedPageWrapper from "@/components/generic/AnimatedPageWrapper"
import MainContainer from "@/components/generic/MainContainer"
import Header from "@/components/header/Header"
import CategorySection from "@/components/products/CategorySection"
import ResultsSection from "@/components/products/ResultsSection"
import DynamicSearchBar from "@/components/search/DynamicSearchBar"

/**
 * Renders the list of products view. Which consists of a Header, the products that matches a query, and a dynamic SearchBar.
 */
const ResultsPage = ({
  searchParams
}: {
  searchParams: { query: string; category: string }
}) => {
  const { query, category } = searchParams

  return (
    <AnimatedPageWrapper>
      <Header />
      <MainContainer className="place-content-start min-h-[calc(100vh-57px)]">
        {category !== undefined ? (
          <CategorySection
            category={category}
            className="bg-transparent flex flex-col gap-y-8 mt-4 pb-24"
          />
        ) : (
          <ResultsSection
            query={query}
            className="bg-transparent flex flex-col gap-y-8 mt-4 pb-24"
          />
        )}

        <DynamicSearchBar />
      </MainContainer>
    </AnimatedPageWrapper>
  )
}

export default ResultsPage
