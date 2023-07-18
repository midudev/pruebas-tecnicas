import Navbar from "@/components/ui/navbar"
import dynamic from 'next/dynamic'

export default function Home() {
  const BookCard = dynamic(() => import('@/components/BookCard'), {
    ssr: false,
  })

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
