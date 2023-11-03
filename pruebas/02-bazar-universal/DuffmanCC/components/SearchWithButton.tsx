"use client";

import { useRouter } from "next/navigation";
import React, { useRef } from "react";

export default function SearchWithButton() {
  const search = useRef<HTMLInputElement | null>(null);
  const router = useRouter();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!search.current || !search.current.value) {
      router.push("/items");

      return;
    }

    if (search.current.value.length < 3) return;

    router.push(`/items?search=${search.current.value}`);
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-8">
      <input
        type="search"
        className="px-4 py-2 rounded border w-72 bg-gray-100"
        name="search"
        ref={search}
        placeholder="laptops smartphones, ..."
      />

      <div className="flex justify-center">
        <button
          type="submit"
          className="px-12 py-2 rounded-3xl border bg-purple-300 text-xl font-light"
        >
          Buscar
        </button>
      </div>
    </form>
  );
}
