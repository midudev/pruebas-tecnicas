"use client"

import { useForm, SubmitHandler } from "react-hook-form"
import SearchIcon from "../icons/SearchIcon"
import { useRouter } from "next/navigation"

type FormValues = {
  searchInput: string
}

const SearchBar = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormValues>()

  const route = useRouter()

  const handleSearch: SubmitHandler<FormValues> = (data) => {
    const query = data.searchInput.toLowerCase()
    route.push(`/results?query=${query}`)
  }

  return (
    <form
      onSubmit={handleSubmit(handleSearch)}
      className="mx-auto mb-12 w-full max-w-sm"
    >
      <label
        htmlFor="search-input"
        className="mb-2 text-sm font-medium text-gray-900 sr-only"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-slate-300">
          <SearchIcon />
        </div>
        <input
          {...register("searchInput", { required: true })}
          type="search"
          id="search-input"
          className="block w-full p-4 pl-10 rounded-xl shadow-[10px_10px_20px_#888a8b,-10px_-10px_20px_#ffffff] text-base outline-none text-gray-900 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
          placeholder="What are you looking for?"
          required
        />
        <button
          type="submit"
          className="text-white shadow-lg shadow-blue-300/30 absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 "
        >
          Search
        </button>
      </div>
    </form>
  )
}

export default SearchBar
