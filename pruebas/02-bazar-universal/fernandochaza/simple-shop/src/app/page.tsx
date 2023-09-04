import SearchBar from "../components/SearchBar"

export default function Home() {
  return (
    <main className="h-screen min-h-fit flex flex-col place-content-center bg-slate-100">
      <h1 className="mb-12 text-4xl font-extrabold text-center text-slate-800">
        SIMPLE SHOP
      </h1>
      <SearchBar />
    </main>
  )
}
