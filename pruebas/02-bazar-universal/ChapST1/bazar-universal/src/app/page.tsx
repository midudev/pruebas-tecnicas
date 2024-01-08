import { Logo } from "@/components/Logo";
import { Search } from "@/components/Search";
import { ModeToggle } from "@/components/mode-toggle";

export default function Home() {
	return (
		<main className="w-full h-dvh flex flex-col items-center justify-center gap-4">
			<Logo className="text-3xl" />
			<Search className="w-full md:w-[400px]" />
		</main>
	);
}
