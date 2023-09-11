import { ComponentPropsWithoutRef } from "react"

type ButtonProps = ComponentPropsWithoutRef<"button">

const ToggleSearchIcon = ({ ...props }: ButtonProps) => {
  return (
    <button {...props}>
      <svg fill="none" viewBox="0 0 24 24">
        <path
          stroke="currentColor"
          strokeWidth="1.6"
          d="M14.954 14.946 21 21m-4-11a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
        />
      </svg>
    </button>
  )
}

export default ToggleSearchIcon
