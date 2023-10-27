import { Item } from "../App"
import { useItemsReducer } from "./useItemsReducer"

export function useItems () {
  const { items, actionAddItem, actionRemoveItem } = useItemsReducer()

  const addItem = (text: string) => {
    const newItem: Item = {
      id: crypto.randomUUID(),
      text,
      timestamp: Date.now()
    }

    actionAddItem(newItem)
  }

  const removeItem = (id: string) => {
    actionRemoveItem(id)
  }

  return {
    items,
    addItem,
    removeItem
  }
}
