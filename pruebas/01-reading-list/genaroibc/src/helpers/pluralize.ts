import { $ } from "@builder.io/qwik"

export const pluralize = $((substantive: string, count: number) => {
  const isPlural = count !== 1
  const phrase = `${count} ${substantive}`

  return isPlural ? `${phrase}s` : phrase
})
