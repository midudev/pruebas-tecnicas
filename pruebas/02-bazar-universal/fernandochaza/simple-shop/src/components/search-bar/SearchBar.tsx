"use client"

import { useForm, SubmitHandler } from "react-hook-form"
import SearchIcon from "@/icons/SearchIcon"

type FormValues = {
  searchInput: string
}

const SearchBar = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormValues>()

  const handleSearch: SubmitHandler<FormValues> = (data) => {
    console.log(data)
  }

  return (
    <form
      onSubmit={handleSubmit(handleSearch)}
      className="mx-auto mb-12 w-full max-w-sm"
    >
      <label
        htmlFor="search-input"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <SearchIcon />
        </div>
        <input
          {...register("searchInput", { required: true })}
          type="search"
          id="search-input"
          className="block w-full p-4 pl-10 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="What are you looking for?"
          required
        />
        <button
          type="submit"
          className="text-white shadow-lg shadow-blue-500/30 dark:shadow absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Search
        </button>
      </div>
    </form>
  )
}

export default SearchBar
