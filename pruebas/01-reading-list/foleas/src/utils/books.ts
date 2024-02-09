import { Book } from "../types";

export const getPagesRange = (books: Array<Book>) => {
  const pagesArr = books.map(({ book: { pages } }) => pages);
  return {
    min: roundToNearest10(Math.min(...pagesArr)),
    max: roundToNearest10(Math.max(...pagesArr)),
  };
};

export const roundToNearest10 = (number: number): number =>
  Math.round(number / 10) * 10;

export const getMaxPage = (maxQty: number, perPage: number) =>
  Math.ceil(maxQty / perPage);
