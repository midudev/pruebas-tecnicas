import { useEffect } from 'react'

export default function useSeo ({ title, description }) {
  useEffect(() => {
    if (title) document.title = title + ' | Bazar universal'
    const metaDescripcion = document.querySelector('meta[name="description"]')
    metaDescripcion?.setAttribute('content', description)
  }, [title, description])
}
