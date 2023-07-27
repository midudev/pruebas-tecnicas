/*
    * Con el hook useCategories, se obtienen las categorías de la API y esta nos retorna un objeto
    * con las siguientes propiedades: categories que es un arreglo de categorías [string, string, ...]
*/

import { useEffect, useState } from 'react'
import { getBooksCategories } from '../services/api/getCategories'

export function useCategories () {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    getBooksCategories().then((categories) => setCategories(categories))
  }, [])

  return {
    categories
  }
}
