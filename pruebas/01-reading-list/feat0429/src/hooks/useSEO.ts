import { useEffect } from 'react'

interface SEOParameters {
  title: string
  description: string
}

export function useSEO ({ title, description }: SEOParameters) {
  useEffect(() => {
    document.title = title
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', description)
  }, [title, description])
}
