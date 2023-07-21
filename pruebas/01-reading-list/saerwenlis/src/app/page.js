'use client'
import Image from "next/image";
import search from "../../public/assets/search.svg";
import Dashboard from "./components/Dashboard";
import ReadingList from "./components/ReadingList";
import { AnimatePresence, LayoutGroup } from "framer-motion";

export default function Home() {
  return (
    <AnimatePresence>
      <main className="w-full flex ml-20">
        <section className="w-7/12 flex flex-col mt-12 pl-8">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold pl-8">Explore Books</h1>
            <div className="w-[460px] h-12 flex items-center bg-input p-3 rounded-md">
              <span className="w-4 h-auto mx-4">
                <Image src={search} width='auto' height='auto' alt="search icon" />
              </span>
              <input className="w-full bg-input placeholder:text-xs" placeholder="Search book titles, authors, genres..." />
            </div>
          </div>
        <LayoutGroup>
            <Dashboard />
          <section className="fixed top-0 right-0 w-4/12">
            <ReadingList />
          </section>
        </LayoutGroup>
        </section>
      </main>
    </AnimatePresence>

  )
}
