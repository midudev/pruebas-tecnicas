import ListBook from "../components/ListBook"
import ListBooksPending from "../components/ListBooksPending"
import Menu from "../components/Menu"

function Home(): JSX.Element {
  return (
    <>
      <Menu canViewFilter={true} />
      <section className=" w-full h-[calc(100vh_-_140px)] flex row mt-6 gap-6" >
        <ListBooksPending />
        <ListBook/>
      </section>
    </>
  )
}

export default Home