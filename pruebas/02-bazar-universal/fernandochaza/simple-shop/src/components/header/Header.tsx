import Link from "next/link"

import CartLogo from "@/icons/CartLogo"

const Header = () => {
  return (
    <header className="h-fit px-2 flex border-b items-center sticky top-0 z-10 inset-x-0 bg-slate-50 bg-opacity-80">
      <Link href="/" aria-label="Return to home page">
        <CartLogo className="w-10 bg-slate-50 rounded-full p-1 border-2 m-2" />
      </Link>
      <h1 className="pl-2 text-xl font-extrabold text-center">SIMPLE SHOP</h1>
    </header>
  )
}

export default Header
