import { Truck } from "@/components/Icons";
import SearchWithButton from "@/components/SearchWithButton";

export default function Home() {
  return (
    <div className="flex flex-col gap-8 items-center justify-center grow">
      <Truck width="200" />

      <h1 className="text-4xl font-bold">Bazar Online</h1>

      <SearchWithButton />
    </div>
  );
}
