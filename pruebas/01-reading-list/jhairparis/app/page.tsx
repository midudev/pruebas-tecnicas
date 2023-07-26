"use client";
import Library from "@/components/Library";
import { useGlobalState } from "@/lib/globalContext";
import read from "@/lib/readJson";
import { useEffect } from "react";

export default function Home() {
  const { setGlobalState } = useGlobalState();

  useEffect(() => {
    const { main, genre, copy } = read();
    setGlobalState({
      library: main.library,
      read: [],
      total: main.library.length,
      nRead: 0,
      genre,
      origin: copy,
      isFilter: [false,""],
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className="p-10">
      <Library />
    </main>
  );
}
