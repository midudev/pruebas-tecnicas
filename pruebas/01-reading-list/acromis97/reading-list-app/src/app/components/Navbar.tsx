import Link from "next/link";

import { useId } from "react";
import ReadingListBundler from "./ReadingListBundler";

export const Navbar = () => {
    const navId = useId()
    
	return (
		<>
			<nav id={navId} className="w-full h-16 flex flex-row items-center justify-between bg-cyan-600  text-slate-800 px-6">
				<Link href="/" className="hover:scale-105">
					<h1 className="text-lg font-bold">Reading list</h1>
				</Link>
				<div>
					<ReadingListBundler />
				</div>
			</nav>
		</>
	);
};
