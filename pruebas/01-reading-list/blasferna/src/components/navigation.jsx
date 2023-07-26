"use client";
import SearchInput from "@/components/search";
import { useAppContext } from "@/context/store";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
                    Biblioteca
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
                    {inReadingListCount > 0 && (
                      <div className="absolute -right-2 -top-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-orange-500  text-xs font-bold text-white">
                        {inReadingListCount}
                      </div>
                    )}
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
