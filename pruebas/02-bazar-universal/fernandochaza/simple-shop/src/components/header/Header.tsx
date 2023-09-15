import Link from "next/link"

import CartIcon from "@/icons/CartIcon"

const Header = () => {
  return (
    <header className="h-fit px-2 flex border-b items-center sticky top-0 z-10 inset-x-0 bg-slate-50 bg-opacity-80">
      <Link href="/">
        <CartIcon className="w-10 bg-slate-50 rounded-full p-1 border-2 m-2" />
      </Link>
      <h1 className="pl-2 text-2xl font-bold text-center">Simple Shop</h1>
    </header>
  )
}

export default Header
