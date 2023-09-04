import SearchBar from "../components/search-bar/SearchBar"

export default function Home() {
  return (
    <main className="h-screen  min-h-fit flex flex-col place-content-center dark:bg-slate-800">
      <h1 className="mb-12 text-3xl font-bold text-center dark:text-slate-50">
        Simple Shop
      </h1>
      <SearchBar />
    </main>
  )
}
