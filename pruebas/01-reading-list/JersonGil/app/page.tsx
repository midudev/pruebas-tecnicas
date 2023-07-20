import Navbar from "@/components/ui/navbar"
import Library from "@/layouts/Library"

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Library />
      </main>
    </>
  )
}
