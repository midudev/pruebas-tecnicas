import { useState, useEffect } from 'react'
export default function useBooks() {
  const [isLoading, setLoading] = useState(true)
  const [classNameString, setClassNameString] = useState('')

  useEffect(() => {
    let classNameStringBase = 'duration-700 ease-in-out group-hover:opacity-75'
    if (isLoading) {
      setClassNameString(`${classNameStringBase} scale-110 blur-2xl grayscale`)
    } else {
      setClassNameString(`${classNameStringBase} scale-100 blur-0 grayscale-0`)
    }
  }, [isLoading])

  return {
    setLoading,
    classNameString
  }
}
