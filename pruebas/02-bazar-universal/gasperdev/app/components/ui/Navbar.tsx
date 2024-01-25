import Link from "next/link"
import { TruckIcon } from "./Icons"
import Search from "./Search"

export default function Navbar() {
  return (
    <header className="fixed w-full  ">
      <nav className="flex bg-white mx-auto  max-w-lg  py-2 px-2 top-0 ">
        <Link href="/">
          <TruckIcon className="h-12 w-12 mr-2" />
          <span className="sr-only">Inicio</span>
        </Link>
        <Search placeholder="laptops, smartphones, ..." />
      </nav>
    </header>
  )
}
