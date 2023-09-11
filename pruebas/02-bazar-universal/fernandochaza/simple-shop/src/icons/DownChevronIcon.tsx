import { ComponentPropsWithoutRef } from "react"

type ButtonProps = ComponentPropsWithoutRef<"button">

const DownChevronIcon = ({ ...props }: ButtonProps) => {
  return (
    <button {...props}>
      <svg fill="none" viewBox="0 0 24 24">
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.6"
          d="m6 10 6 6 6-6"
        />
      </svg>
    </button>
  )
}

export default DownChevronIcon
