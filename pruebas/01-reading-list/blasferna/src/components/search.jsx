"use client";
import { useFilterContext } from "@/context/store";
import { cn } from "@/lib/utils";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { usePathname } from "next/navigation";


export default function SearchInput(){
    const pathname = usePathname();
    const isHidden = pathname.startsWith("/books");

    return (
    <div className={cn(isHidden && "hidden", "flex flex-1 ml-6 justify-end")}>
        <div
          className={cn(
            !isHidden && "md:block",
            "hidden w-full max-w-lg lg:max-w-xs"
          )}
        >
            <SearchBase></SearchBase>
        </div>
    </div>
    )
}

export function SearchBase() {
    const {searchQuery, setSearchQuery} = useFilterContext();
  
    const onChangeHander = (e) => {
      setSearchQuery(e.target.value);
    }
    return (
        <>
          <label htmlFor="search" className="sr-only">
            Buscar
          </label>
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <MagnifyingGlassIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </div>
            <input
              id="search"
              name="search"
              value={searchQuery}
              onChange={onChangeHander}
              className="block w-full rounded-md border bg-gray-800 md:bg-gray-700 py-1.5 pl-10 pr-3 text-gray-200 md:text-gray-300 placeholder:text-gray-200 md:placeholder:text-gray-400 sm:text-sm sm:leading-6 focus:ring-gray-500 focus:border-gray-500"
              placeholder="Buscar por título o autor"
              type="search"
            />
          </div>
      </>
    );
  };
  