import { $ } from "@builder.io/qwik"

type KeyValuePairs = [string, any]

export const useLocalStorage = () => {
  const save = $((keyValuePairs: KeyValuePairs | KeyValuePairs[]) => {
    if (Array.isArray(keyValuePairs)) {
      for (const [key, value] of keyValuePairs) {
        localStorage.setItem(key, JSON.stringify(value))
      }

      return
    }

    localStorage.setItem(keyValuePairs[0], JSON.stringify(keyValuePairs[1]))
  })

  return {
    save
  }
}
