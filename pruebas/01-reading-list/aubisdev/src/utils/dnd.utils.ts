import { Book } from "../models";

export const reorder = (
  list: Book[],
  startIndex: number,
  endIndex: number
): Book[] => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};
