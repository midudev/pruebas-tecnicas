"use client";
import Link from "next/link";
import {MagnifyingGlassIcon} from "@heroicons/react/24/solid";
import { useAppContext } from "@/context/store";
import { usePathname } from "next/navigation";


const SearchInput = () => {
  return (
    <div className="flex flex-1 ml-6 justify-end">
      <div className="hidden md:block w-full max-w-lg lg:max-w-xs">
        <label htmlFor="search" className="sr-only">
          Search
        </label>
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </div>
          <input
            id="search"
            name="search"
            className="block w-full rounded-md border-0 bg-gray-700 py-1.5 pl-10 pr-3 text-gray-300 placeholder:text-gray-400 focus:bg-white focus:text-gray-900 focus:ring-0 sm:text-sm sm:leading-6"
            placeholder="Search"
            type="search"
          />
        </div>
      </div>
  </div>    
  )
}

export default function Navigation() {
  const { inReadingListCount, availableListCount } = useAppContext();
  const pathname = usePathname();

  return (
    <header className="sticky top-0 h-16 z-20 bg-gray-900 text-white shadow-md">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <nav className="w-full">
            <div className="flex flex-1 items-center justify-between sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <Link href="/" className="font-medium text-2xl text-indigo-300">
                  BookBuddy
                </Link>
              </div>
              <div className="flex justify-between md:w-full ml-6">
                <div className="flex space-x-4">
                  <Link
                    href="/"
                    className={
                      !pathname.startsWith("/reading-list")
                        ? "relative bg-gray-950 text-white rounded-md px-3 py-2 text-sm font-medium"
                        : "relative text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                    }
                  >
                    Librería
                  </Link>
                  <Link
                    href="/reading-list"
                    className={
                      pathname.startsWith("/reading-list")
                        ? "relative bg-gray-950 text-white rounded-md px-3 py-2 text-sm font-medium"
                        : "relative text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                    }
                  >
                    Mi lista
                    <div className="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-orange-500  rounded-full -top-2 -right-2">
                      {inReadingListCount}
                    </div>
                  </Link>
                </div>
                <SearchInput></SearchInput>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
