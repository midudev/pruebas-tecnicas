import Button from "./ui/Button"
import { SearchIcon, TruckIcon } from "./ui/Icons"
export default function SearchBox() {
  return (
    <div className="max-w-md mx-auto">
      <div className="flex flex-col items-center p-4">
        <TruckIcon className="text-[#bd1e59] w-24 h-24" />
        <h1 className="text-3xl font-bold mt-2 text-gray-800">
          Bazar Universal
        </h1>
        <div className="mt-4 w-full flex items-center rounded-md border p-2 bg-white">
          <input
            className="ml-2 p-2 w-full focus:outline-none"
            placeholder="laptops, smartphones, ..."
            type="text"
          />
          <SearchIcon className="w-6 h-6" />
        </div>
        <Button />
      </div>
    </div>
  )
}
