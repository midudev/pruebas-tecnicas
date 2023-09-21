import SearchIcon from "@/icons/Search"
import { type ComponentPropsWithoutRef } from "react"

type ButtonProps = ComponentPropsWithoutRef<"button">

const DisplaySearchBar = ({ ...props }: ButtonProps) => {
  return (
    <button {...props} aria-label="Display search bar">
      <SearchIcon />
    </button>
  )
}

export default DisplaySearchBar
