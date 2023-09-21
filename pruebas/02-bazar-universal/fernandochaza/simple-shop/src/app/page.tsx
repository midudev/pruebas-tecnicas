import AnimatedPageWrapper from "@/components/generic/AnimatedPageWrapper"
import SearchBar from "../components/search/SearchBar"
import MainContainer from "@/components/generic/MainContainer"
import Header from "@/components/header/Header"
import GiftHeroImage from "@/images/GiftHero"

/**
 * Renders the landing page view. Which consists of a Title, subtitle and a search bar.
 */
export default function Home() {
  return (
    <AnimatedPageWrapper>
      <Header />
      <MainContainer className="h-[calc(100vh-57px)] place-content-start">
        <h2 className="bg-white rounded-xl max-w-fit bg-opacity-70 my-8 mx-auto py-1 px-4 shadow-[5px_5px_10px_#b0b2b3,-5px_-5px_10px_#ffffff]">
          Online Store
        </h2>
        <GiftHeroImage className="w-10/12 mx-auto my-10" />
        <SearchBar />
      </MainContainer>
    </AnimatedPageWrapper>
  )
}
