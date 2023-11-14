import { useReducer } from "react"
import { INITIAL_STATE, itemsReducer, ItemsActionKinds } from '../reducers/items'
import { Item } from "../App"

export function useItemsReducer () {
  const [items, dispatch] = useReducer(itemsReducer, INITIAL_STATE)

  const actionAddItem = (newItem: Item) => {
    dispatch({
      type: ItemsActionKinds.ADD_ITEM,
      payload: {
        newItem
      }
    })
  }

  const actionRemoveItem = (id: string) => {
    dispatch({
      type: ItemsActionKinds.REMOVE_ITEM,
      payload: {
        id
      }
    })
  }

  return {
    items,
    actionAddItem,
    actionRemoveItem
  }
}
