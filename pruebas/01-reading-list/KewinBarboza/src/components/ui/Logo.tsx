import { component$ } from "@builder.io/qwik"

export const Logo = component$(() => {
  return (
    <span class="flex items-center">
      <svg class="-rotate-45" width="42" height="42" viewBox="0 0 24 24" stroke-width="1.5" stroke="#6f32be" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M19 4v16h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12z" />
        <path d="M19 16h-12a2 2 0 0 0 -2 2" />
        <path d="M9 8h6" />
      </svg>
      <p class="text-3xl font-bold font-sans">Reading</p>
    </span>
  )
});
