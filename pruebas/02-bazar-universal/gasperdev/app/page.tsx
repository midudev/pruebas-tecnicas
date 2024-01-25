import Logo from "./components/Logo"
import Search from "./components/ui/Search"
import Container from "./components/Container"
import LinkKeypress from "./components/ui/LinkKeyPress"
interface Params {
  searchParams?: { search?: string; page?: string }
}

export default function Home({ searchParams }: Params) {
  const query = searchParams?.search || ""
  const currentPage = Number(searchParams?.page) || 1

  return (
    <Container>
      <section className="max-w-md flex flex-col items-center  justify-center   mx-auto gap-6 ">
        <div className=" h-96 w-28 blur-3xl bg-pink-400/30" />
        <div className="flex flex-col items-center gap-4 absolute">
          <Logo />
          <Search placeholder="laptops, smartphones, ..." />
          <LinkKeypress Links={`/items?search=${query}&page=${currentPage}`} />
        </div>
      </section>
    </Container>
  )
}
