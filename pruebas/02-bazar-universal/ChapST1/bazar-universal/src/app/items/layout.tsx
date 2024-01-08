import { NavBar } from "@/components/nav-bar";

export default function ItemsLayout({
	children,
}: { children: React.ReactNode }) {
	return (
		<div className="max-w-screen-2xl m-auto">
			<NavBar />
			<main className="px-2 pb-4 md:px-4">{children}</main>
		</div>
	);
}
