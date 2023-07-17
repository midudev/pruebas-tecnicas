import Navbar from "@/components/ui/navbar"
import BookCard from "@/components/BookCard"

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <BookCard />
      </main>
    </>
  )
}
