import { type ComponentPropsWithoutRef } from "react"
import DownChevron from "@/icons/DownChevron"

type ButtonProps = ComponentPropsWithoutRef<"button">

const HideSearchBar = (props: ButtonProps) => {
  return (
    <button {...props} aria-label="Hide search bar">
      <DownChevron />
    </button>
  )
}

export default HideSearchBar
