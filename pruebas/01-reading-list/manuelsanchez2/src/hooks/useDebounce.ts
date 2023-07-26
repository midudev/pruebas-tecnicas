import { useSignal, useVisibleTask$ } from '@builder.io/qwik'

export function useDebounce<T>(value: T, delay = 500) {
  const debouncedValue = useSignal(value)

  useVisibleTask$(({ track }) => {
    track(() => value)
    track(() => delay)

    const timer = setTimeout(() => {
      debouncedValue.value = value
    }, delay)

    return () => {
      clearTimeout(timer)
    }
  })

  return debouncedValue
}
