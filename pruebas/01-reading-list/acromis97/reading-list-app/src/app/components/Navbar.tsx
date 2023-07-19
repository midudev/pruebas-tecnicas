import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { useId } from "react";

export const Navbar = () => {
    const navId = useId()
    
	return (
		<>
			<nav id={navId} className="w-full h-16 flex flex-row items-center justify-between bg-cyan-600  text-slate-800 px-6">
				<Link href="/">
					<h1 className="text-lg font-bold">Reading list</h1>
				</Link>
				<div>
					<Link  href="/reading-list">
                        <p className="flex flex-row">
                            <FontAwesomeIcon icon={faBook} size="sm"/>
                        </p>    
					</Link>
				</div>
			</nav>
		</>
	);
};
