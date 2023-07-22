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
  return (
    <Select ref={ref} {...props}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Género" />
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

export { GenreSelect };
