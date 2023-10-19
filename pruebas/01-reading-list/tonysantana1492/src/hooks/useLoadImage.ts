import { useEffect, useState } from 'react'

export const useLoadImage = ({ src }: { src: string }) => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const image = new Image()
    image.onload = () => {
      setLoading(false)
    }

    image.src = src
  }, [src])

  return { loading }
}
