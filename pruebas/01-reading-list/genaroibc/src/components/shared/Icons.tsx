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

export const IconBookOutlined = component$(({ size = 24 }: SharedIconProps) => {
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
      <path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0"></path>
      <path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0"></path>
      <path d="M3 6l0 13"></path>
      <path d="M12 6l0 13"></path>
      <path d="M21 6l0 13"></path>
    </svg>
  )
})

export const IconCalendarOutlined = component$(
  ({ size = 24 }: SharedIconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon icon-tabler icon-tabler-calendar-stats"
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
        <path d="M11.795 21h-6.795a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v4"></path>
        <path d="M18 14v4h4"></path>
        <path d="M18 18m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
        <path d="M15 3v4"></path>
        <path d="M7 3v4"></path>
        <path d="M3 11h16"></path>
      </svg>
    )
  }
)

export const IconLibraryOutlined = component$(
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
        <path d="M5 4m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z"></path>
        <path d="M9 4m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z"></path>
        <path d="M5 8h4"></path>
        <path d="M9 16h4"></path>
        <path d="M13.803 4.56l2.184 -.53c.562 -.135 1.133 .19 1.282 .732l3.695 13.418a1.02 1.02 0 0 1 -.634 1.219l-.133 .041l-2.184 .53c-.562 .135 -1.133 -.19 -1.282 -.732l-3.695 -13.418a1.02 1.02 0 0 1 .634 -1.219l.133 -.041z"></path>
        <path d="M14 9l4 -1"></path>
        <path d="M16 16l3.923 -.98"></path>
      </svg>
    )
  }
)

export const IconCirclePlus = component$(({ size = 24 }: SharedIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-circle-plus"
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
      <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
      <path d="M9 12l6 0"></path>
      <path d="M12 9l0 6"></path>
    </svg>
  )
})
