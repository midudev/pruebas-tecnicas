import { useContext } from 'react'
import { BooksContext } from '../context/BooksProvider'
import { INITIAL_CONTEXT } from '../constants'

export function useBooks () {
  /**
   * Seguramente no es la forma de hacer lo que hay en la línea
   * 16 en adelante. Tendré que revisarlo más adelante o ver cómo se hace.
   * TODO: Revisar cómo se inicializa el contexto en TS correctamente.
   */

  const context = useContext(BooksContext)
  if (context === undefined) {
    throw new Error('useBooks must be used within a BooksProvider')
  }

  return context ?? INITIAL_CONTEXT
}
