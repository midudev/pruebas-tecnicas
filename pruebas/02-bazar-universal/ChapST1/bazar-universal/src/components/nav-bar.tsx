import { Logo } from "./Logo";
import { Search } from "./Search";
import { ModeToggle } from "./mode-toggle";
import { ShoppingCart } from "./shopping-cart";

export function NavBar() {
	return (
		<header className=" sticky top-0 left-0 bg-background/70 backdrop-blur-md z-50 flex flex-col gap-3 items-center justify-between px-4 py-3 md:flex-row">
			<Logo className="text-2xl" />
			<div className="flex gap-2 md:gap-5 w-full md:w-auto ">
				<Search />
				<ShoppingCart />
				<ModeToggle />
			</div>
		</header>
	);
}
