"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
	const pathname = usePathname();

	return (
		<>
			<Link href='/' className={`text_main ${pathname === "/" && "text_main--active"}`}>
				HOME
			</Link>
			<Link href='/books' className={`text_main ${pathname === "/books" && "text_main--active"}`}>
				BOOKS
			</Link>
			<Link href='/about' className={`text_main ${pathname === "/about" && "text_main--active"}`}>
				ABOUT
			</Link>
		</>
	);
};

export default NavBar;
