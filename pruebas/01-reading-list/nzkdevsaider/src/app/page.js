"use client";
import BookList from "@myreading/components/BookList";
import BookWatchlist from "@myreading/components/BookWatchlist";
import { BookProvider } from "@myreading/context/BookContext";

export default function Home() {
  return (
    <div className="flex flex-col-reverse lg:flex-row justify-start">
      <BookProvider>
        <BookList />
        <BookWatchlist />
      </BookProvider>
    </div>
  );
}
