import { useState, useEffect } from 'react'
import useAppContext from "@context/useAppContext"
import { FILTER_TYPES } from '@utils/index'

export default function useFilterByPages(maxPage:number) {
  const { filterBooks } = useAppContext()
  const [currentPages, setCurrentPages] = useState<number>(maxPage);

  useEffect(() => {
    setCurrentPages(maxPage);
  }, [maxPage]);

  const onChange = (event : React.ChangeEvent<HTMLInputElement>) => {
    setCurrentPages(parseInt(event.target.value))
  }

  const onMouseUp = (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    const { value } = event.target as HTMLInputElement;

    filterBooks(parseInt(value), FILTER_TYPES.pages)
  }

  return {
    currentPages,
    onChange,
    onMouseUp
  };
}
