import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface IDataPayload {
  filterGenre: string
}

const DEFAULT_STATE = {
  filterGenre: ''
}

const initialState:IDataPayload = (() => {
  const dataStore = localStorage.getItem('__REDUX__STORE__filters')
  return dataStore ? JSON.parse(dataStore) : DEFAULT_STATE
})()

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setNewGenre: (state, action: PayloadAction<IDataPayload>) => {
      const { filterGenre } = action.payload

      return {
        ...state,
        filterGenre
      }
    }
  }
})

export const { setNewGenre } = filtersSlice.actions

export default filtersSlice.reducer
