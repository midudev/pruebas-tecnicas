import type { TypedUseSelectorHook } from 'react-redux'
import { useSelector, useDispatch } from 'react-redux'
import { RootState, AppDispatch } from '../store'

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch: () => AppDispatch = useDispatch
