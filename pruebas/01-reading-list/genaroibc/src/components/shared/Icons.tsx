import { component$ } from "@builder.io/qwik"

interface SharedIconProps {
  size?: number
}

export const IconBookmarkPlus = component$(({ size = 24 }: SharedIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      stroke-width="2"
      stroke="currentColor"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M12.357 17.214l-.357 -.214l-5 3v-14a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v6.5"></path>
      <path d="M16 19h6"></path>
      <path d="M19 16v6"></path>
    </svg>
  )
})

export const IconBookmarkFilled = component$(
  ({ size = 24 }: SharedIconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path
          d="M15 3a3 3 0 0 1 2.995 2.824l.005 .176v14a1 1 0 0 1 -1.413 .911l-.101 -.054l-4.487 -2.691l-4.485 2.691a1 1 0 0 1 -1.508 -.743l-.006 -.114v-14a3 3 0 0 1 2.824 -2.995l.176 -.005h6z"
          stroke-width="0"
          fill="currentColor"
        ></path>
      </svg>
    )
  }
)
