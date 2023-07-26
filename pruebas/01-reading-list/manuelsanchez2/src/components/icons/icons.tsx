import { component$ } from '@builder.io/qwik'
import { css } from '~/styled-system/css'

export const IconPrioritySort = component$(() => {
  return (
    <svg
      class={css({
        mr: '0.25rem',
        width: '1rem',
        height: '1rem',
      })}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="24" height="24" fill="transparent" />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M6.97065 4C5.35131 4 4.4033 5.82396 5.33382 7.14925L9.01217 12.3882L9.01217 18.0139C9.01217 19.1185 9.9076 20.0139 11.0122 20.0139H13.0192C14.1238 20.0139 15.0192 19.1185 15.0192 18.0139V12.3866L18.6767 7.1444C19.6017 5.81857 18.6531 4 17.0364 4H6.97065ZM6.97065 6L17.0364 6L13.379 11.2422C13.1448 11.5778 13.0192 11.9773 13.0192 12.3866V18.0139H11.0122V12.3882C11.0122 11.9769 10.8854 11.5756 10.649 11.2389L6.97065 6Z"
        fill="currentColor"
      />
    </svg>
  )
})

export const IconDownload = component$(() => {
  return (
    <svg
      class={css({
        mr: '0.5rem',
        width: '1rem',
        height: '1rem',
      })}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#download-lg-clip)">
        <path
          d="M7.05457 11.7185L12.0513 17.0845M12.0513 17.0845L17.0482 11.7185M12.0513 17.0845V3.09265"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M4 19V20C4 20.5523 4.44772 21 5 21H19C19.5523 21 20 20.5523 20 20V19"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
        />
      </g>
      <defs>
        <clipPath id="download-lg-clip">
          <rect width="24" height="24" fill="none" />
        </clipPath>
      </defs>
    </svg>
  )
})
