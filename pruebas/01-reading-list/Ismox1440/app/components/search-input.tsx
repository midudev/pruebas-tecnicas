"use client";
import { Input } from "@/components/ui/input";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const SearchInput = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("search");
  const [search, setSearch] = useState(searchQuery ?? "");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/home?search=${search}`);
  };
  return (
    <form onSubmit={handleSubmit}>
      <Input
        placeholder="Buscar..."
        value={search}
        onChange={(value) => setSearch(value.target.value)}
      ></Input>
    </form>
  );
};

export default SearchInput;
