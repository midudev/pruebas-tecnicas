"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useDebouncedCallback } from "use-debounce"
import { SearchIcon } from "./Icons"

export default function Search({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams)
    params.set("page", "1")
    if (term) {
      params.set("search", term)
    } else {
      params.delete("search")
    }

    replace(`${pathname}?${params.toString()}`)
  }, 200)

  return (
    <div className="w-full flex items-center rounded-md border pr-2 bg-white ">
      <input
        onChange={(Event) => handleSearch(Event.target.value)}
        className="ml-2 p-2  w-full focus:outline-none"
        placeholder={placeholder}
        defaultValue={searchParams.get("search")?.toString()}
        type="text"
      />
      <SearchIcon className="w-6 h-6" />
    </div>
  )
}
