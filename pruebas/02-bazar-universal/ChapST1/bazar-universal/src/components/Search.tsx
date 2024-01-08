import { search } from "@/actions/search";
import { Input } from "./ui/input";

export function Search(props: React.HTMLAttributes<HTMLInputElement>) {
	return (
		<div className="flex-grow md:flex-grow-0">
			<form action={search}>
				<Input
					type="search"
					placeholder="producto, etc"
					name="keyword"
					autoComplete="off"
					{...props}
				/>
			</form>
		</div>
	);
}
