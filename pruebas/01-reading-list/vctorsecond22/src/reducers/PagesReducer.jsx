export const BOOKS_ACTION_TYPES = {
  ADD_TO_PURCHASED: 'ADD_TO_PURCHASED', 
  ADD_TO_CAR: 'ADD_TO_CAR',
  CLEAR_CAR: 'CLEAR_CAR',
  REMOVE_FROM_CAR:'REMOVE_FROM_CAR',
}
export function actionPagesReducer(state, action) {
  switch (action.type) {
    case BOOKS_ACTION_TYPES.ADD_TO_CAR: {
      //console.log(action.payload.id)
      let indexItem = state.home.findIndex(item => item.id === action.payload.id)
      let newItem = state.home[indexItem]
      newItem.onSwitchCase = 'inCar'
      const newhomeState = [
        ...state.home.slice(0, indexItem),
        ...[state.home[indexItem] = newItem],
        ...state.home.slice(indexItem + 1)]
      const newCarState = newhomeState.filter(item => item.onSwitchCase === 'inCar')



      return indexItem >= 0
        ? {
          ...state,
          home: [...newhomeState],
          car: [...newCarState],
          flagRender:true
        }
        :
        []
    }
    case BOOKS_ACTION_TYPES.CLEAR_CAR:
      window.localStorage.removeItem('car')
      window.localStorage.removeItem('home')
      return {
        ...state,
        home: [...action.payload],
        car: [],
      }
    case BOOKS_ACTION_TYPES.REMOVE_FROM_CAR: {
      let indexItem = state.home.findIndex(item => item.id === action.payload.id)
      let newItem = state.home[indexItem]
      newItem.onSwitchCase = ''
      const newhomeState = [
        ...state.home.slice(0, indexItem),
        ...[state.home[indexItem] = newItem],
        ...state.home.slice(indexItem + 1)]
      const newCarState = newhomeState.filter(item => item.onSwitchCase === 'inCar')
      return indexItem >= 0
        ? {
          ...state,
          home: [...newhomeState],
          car: [...newCarState],
        }
        :
        []
    }
    case BOOKS_ACTION_TYPES.ADD_TO_PURCHASED: {
      let indexItem = state.home.findIndex(item => item.id === action.payload)
      let newItem = state.home[indexItem]
      newItem.onSwitchCase = 'inPurchased'
      const newhomeState = [
        ...state.home.slice(0, indexItem),
        ...[state.home[indexItem] = newItem],
        ...state.home.slice(indexItem + 1)]
      const newPurchasedState = newhomeState.filter(item => item.onSwitchCase === 'inPurchased')
      return indexItem >= 0
        ? {
          ...state,
          home: [...newhomeState],
          purchased: [...newPurchasedState],
        }
        :
        []
    }

  }
}