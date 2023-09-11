import PageWrapper from "@/components/generic/PageWrapper"
import SearchBar from "../components/search/SearchBar"

export default function Home() {
  return (
    <PageWrapper>
      <main className="inset-0 bg-[radial-gradient(#dde0e2_1px,transparent_2px)] [background-size:28px_28px] h-screen min-h-fit flex flex-col place-content-center bg-slate-100">
        <h1 className="bg-clip-text text-transparent bg-gradient-to-b from-slate-900 to-slate-600 text-4xl font-extrabold text-center">
          SIMPLE SHOP
        </h1>
        <p className="bg-white rounded-xl max-w-fit bg-opacity-70 mb-12 mt-4 mx-auto py-1 px-4 shadow-[5px_5px_10px_#b0b2b3,-5px_-5px_10px_#ffffff]">
          Online Store
        </p>
        <SearchBar />
      </main>
    </PageWrapper>
  )
}
