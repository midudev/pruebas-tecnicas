"use client";

import { forwardRef } from "react";
import { getGenres } from "@/lib/books";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/select";

const GenreSelect = forwardRef(({ ...props }, ref) => {
  const genres = getGenres();
  let {value = "Género"} = props
  if (value == ""){value="Género"}
  return (
    <Select ref={ref} {...props}>
      <SelectTrigger className="w-[180px]">
        <SelectValue>
          {value}
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        {genres.map((genre) => (
          <SelectItem key={genre} value={genre}>
            {genre}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
});

GenreSelect.displayName = "GenreSelect";

export { GenreSelect };
