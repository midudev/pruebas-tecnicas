import { type AppDispatch, type RootState } from '../store'

import { useDispatch, useSelector } from 'react-redux'

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()

// export const useAppDispatch: AppDispatch = useDispatch()
