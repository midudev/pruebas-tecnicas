"use client";
import Library from "@/components/Library";
import ReadingList from "@/components/ReadingList";
import { Heading } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { useGlobalState } from "@/lib/globalContext";
import read from "@/lib/readJson";
import { ReadStorage, StorageKey, WriteStorage } from "@/lib/Storage";
import { useEffect } from "react";

export default function Home() {
  const { setGlobalState, data } = useGlobalState();

  useEffect(() => {
    const saved = ReadStorage(true);

    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === StorageKey && event.newValue) {
        const res = ReadStorage(false, event.newValue);
        if (res) setGlobalState(res);
      }
    };

    window.addEventListener("storage", handleStorageChange);

    // if (saved) {
    // setGlobalState(saved);
    // } else {
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
    // }

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    WriteStorage(data);
  }, [data]);

  return (
    <main className="p-10">
      <Heading>Digital library</Heading>
      <div>
        <Text fontSize="md">{data.total - data.nRead} libros disponibles</Text>
        <Text fontSize="sm">{data.nRead} en lista de lectura</Text>
      </div>
      <Library />
      <ReadingList />
    </main>
  );
}
