import { Item } from '../App'

export const INITIAL_STATE: Item[] = []

export enum ItemsActionKinds {
  ADD_ITEM = 'ADD_ITEM',
  REMOVE_ITEM = 'REMOVE_ITEM'
}

type NewItem = {
  newItem: Item
}

type Id = {
  id: string
}

type ActionAddItem = {
  type: ItemsActionKinds.ADD_ITEM,
  payload: NewItem
}

type ActionRemoveItem = {
  type: ItemsActionKinds.REMOVE_ITEM,
  payload: Id
}

type Action = ActionAddItem | ActionRemoveItem 

export function itemsReducer (items: Item[], action: Action): Item[] {
  const { type } = action

  if (type === ItemsActionKinds.ADD_ITEM) {
    return [
      ...items,
      action.payload.newItem
    ]
  }

  if (type === ItemsActionKinds.REMOVE_ITEM) {
    return items.filter(item => item.id !== action.payload.id)
  }

  return items
}
