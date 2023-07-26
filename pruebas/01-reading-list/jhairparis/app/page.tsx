"use client";
import Library from "@/components/Library";
import { useGlobalState } from "@/lib/globalContext";
import read from "@/lib/readJson";
import { ReadStorage, WriteStorage } from "@/lib/Storage";
import { useEffect } from "react";

export default function Home() {
  const { setGlobalState, data } = useGlobalState();

  useEffect(() => {
    const saved = ReadStorage();
    if (saved) {
      setGlobalState({
        library: saved.library,
        read: saved.read,
        total: saved.total,
        nRead: saved.nRead,
        genre: saved.genre,
        origin: saved.origin,
        isFilter: saved.isFilter,
      });
      return;
    }
    const { main, genre, copy } = read();
    setGlobalState({
      library: main.library,
      read: [],
      total: main.library.length,
      nRead: 0,
      genre,
      origin: copy,
      isFilter: [false, ""],
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    WriteStorage(data);
  }, [data]);

  return (
    <main className="p-10">
      <Library />
    </main>
  );
}
