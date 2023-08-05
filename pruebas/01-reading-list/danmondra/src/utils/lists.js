import { DETAILS_OF_LISTS } from '../constants/details-of-lists'

export const findListDetails = (listId) =>
  DETAILS_OF_LISTS.find(({ id }) => id === listId)
