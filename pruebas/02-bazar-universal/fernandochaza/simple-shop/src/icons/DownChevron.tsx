import { type SVGProps } from "react"

const DownChevron = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.6"
        d="m6 10 6 6 6-6"
      />
    </svg>
  )
}

export default DownChevron
