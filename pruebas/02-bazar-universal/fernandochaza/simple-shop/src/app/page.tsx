import AnimatedPageWrapper from "@/components/generic/AnimatedPageWrapper"
import SearchBar from "../components/search/SearchBar"
import MainContainer from "@/components/generic/MainContainer"

/**
 * Renders the landing page view. Which consists of a Title, subtitle and a search bar.
 */
export default function Home() {
  return (
    <AnimatedPageWrapper>
      <MainContainer>
        <h1 className="bg-clip-text text-transparent bg-gradient-to-b from-slate-900 to-slate-600 text-4xl font-extrabold text-center">
          SIMPLE SHOP
        </h1>
        <p className="bg-white rounded-xl max-w-fit bg-opacity-70 mb-12 mt-4 mx-auto py-1 px-4 shadow-[5px_5px_10px_#b0b2b3,-5px_-5px_10px_#ffffff]">
          Online Store
        </p>
        <SearchBar />
      </MainContainer>
    </AnimatedPageWrapper>
  )
}
