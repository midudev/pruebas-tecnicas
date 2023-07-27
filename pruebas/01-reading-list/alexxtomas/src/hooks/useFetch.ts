import { useEffect, useState } from 'react'

interface Params {
  fetch: () => Promise<any>
  active: boolean
  localStorageKey?: string
}

export function useFetch({ fetch, active, localStorageKey }: Params) {
  const [data, setData] = useState(null)
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (active) {
      fetch()
        .then((data) => {
          setData(data)
          if (localStorageKey && typeof window !== 'undefined') {
            localStorage.setItem(localStorageKey, JSON.stringify(data))
          }
        })
        .catch(() => {
          setError(true)
        })
        .finally(() => {
          setLoading(false)
        })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active])

  return { data, error, loading }
}
