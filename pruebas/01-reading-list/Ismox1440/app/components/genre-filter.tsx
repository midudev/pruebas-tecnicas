"use client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter, useSearchParams } from "next/navigation";

export function GenreFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");
  return (
    <Select
      value={!!searchParams.toString() ? genre || undefined : undefined}
      onValueChange={(e) => router.push(`/home/?genre=${e}`)}
    >
      <SelectTrigger className="lg:w-[180px]">
        <SelectValue placeholder="Genero" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Generos</SelectLabel>
          <SelectItem value="fantasía">Fantasía</SelectItem>
          <SelectItem value="ciencia ficción">Ciencia ficción</SelectItem>
          <SelectItem value="zombies">Zombies</SelectItem>
          <SelectItem value="terror">Terror</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
