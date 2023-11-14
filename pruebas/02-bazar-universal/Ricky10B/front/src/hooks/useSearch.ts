import { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

interface useSearchProps {
  formData: FormData
}

export function useSearch () {
  const [isEmpty, setIsEmpty] = useState(false)
  const timeEmpty = useRef(0)
  const navigate = useNavigate()

  const navigateItemsResult = ({ formData }: useSearchProps) => {
    const search = formData.get('search')?.toString().trim()

    if (typeof search === 'string' && search !== '') {
      setIsEmpty(false)
      clearTimeout(timeEmpty.current)

      return navigate(`/items?search=${search}`)
    } else {
      setIsEmpty(true)
      clearTimeout(timeEmpty.current)

      const timeout = setTimeout(() => {
        setIsEmpty(false)
      }, 3000)

      timeEmpty.current = Number(timeout)
    }

    return {
      search
    }
  }

  return {
    isEmpty,
    navigateItemsResult
  }
}
