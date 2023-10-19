/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { useEffect, useRef, useState } from 'react'

export const useIntersectionObserver = () => {
  const ref = useRef(null)
  const [isIntersecting, setIsIntersecting] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [targetElement] = entries
      setIsIntersecting(targetElement.isIntersecting)
    })

    const targetElement = ref.current

    if (targetElement) {
      observer.observe(targetElement)
    }

    return () => {
      if (targetElement) {
        observer.unobserve(targetElement)
      }
    }
  }, [])

  return { ref, isIntersecting }
}
