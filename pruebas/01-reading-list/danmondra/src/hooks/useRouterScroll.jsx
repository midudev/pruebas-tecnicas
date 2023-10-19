import { useContext } from 'react'
import { RouterScrollContext } from '../context/routerScroll'

export function useRouterScroll() {
  return useContext(RouterScrollContext)
}
