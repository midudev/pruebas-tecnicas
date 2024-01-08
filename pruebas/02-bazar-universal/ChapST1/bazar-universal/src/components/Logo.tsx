import Link from "next/link";

export function Logo(props: React.HTMLAttributes<HTMLSpanElement>) {
	return (
		<div>
			<Link href="/">
				<span {...props}>🛍️ Bazar Online</span>
			</Link>
		</div>
	);
}
