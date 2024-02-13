import { useReducer, createContext } from 'react'
import { actionPagesReducer } from '../reducers/PagesReducer.jsx'
import useInitState from '../hooks/useInitState.jsx'

export const PageContext = createContext()

function usePageReducer() {
  const { pagesInitState } = useInitState()
  const [state, dispatch] = useReducer(actionPagesReducer, pagesInitState /* pagesState */)
/* 
  useEffect(() => {
    const handleStorage = (event) => {
      switch (event.key) {
        case 'home': {
          console.log('home')
          console.log(event.newValue)
          break;
        }
        case 'car': {
          console.log('car')
          // console.log(event)
          const nvoValue = JSON.parse(event.newValue)
          console.log(nvoValue[nvoValue.length - 1].id)
          addToCar(nvoValue[nvoValue.length - 1].id)
        }
      }
    }
    window.addEventListener('storage', handleStorage)
  }
    , [state])
 */

  window.localStorage.setItem('car', JSON.stringify(state.car));
  window.localStorage.setItem('home', JSON.stringify(state.home));
 
  




  const addToCar = id => () => dispatch({
    type: 'ADD_TO_CAR',
    payload: id
  }/* ,console.log(id) */)

  const removeFromCar = id => () => dispatch({
    type: 'REMOVE_FROM_CAR',
    payload: id

  })

  const addToPurchased =
    id => () => dispatch({
      type: 'ADD_TO_PURCHASED',
      payload: id
    })

  const clearCar = (booksHome) => () => dispatch({ type: 'CLEAR_CAR', payload: booksHome })

  return { state, addToCar, clearCar, removeFromCar, addToPurchased }
}

export function PagesProvider({ children }) {
  const { state, addToCar, clearCar, removeFromCar, addToPurchased } = usePageReducer()
  return (
    <PageContext.Provider value={{
      state,
      addToCar,
      addToPurchased,
      clearCar,
      removeFromCar
    }}
    >
      {children}
    </PageContext.Provider>
  )
}