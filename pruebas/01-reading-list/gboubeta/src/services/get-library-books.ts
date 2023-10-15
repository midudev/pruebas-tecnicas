import { getValidatedData } from "./get-validated-data";

interface Props {
  offset?: number;
  limit?: number;
  filter?: {
    genre?: string;
    pages?: number;
  };
}

export const getLibraryBooks = async ({
  offset = 0,
  limit = undefined,
  filter = {},
}: Props) => {
  function hasProperties(obj: object): boolean {
    return Object.keys(obj).length > 0;
  }

  const validatedData = await getValidatedData();
  const lastBook = validatedData.library.length;

  /*
   * Limitar petición de libros a lastBook
   */
  // offset <= lastBook
  // offset + limit >= lastBook
  const normalizedOffset = Math.min(lastBook, offset);
  const normalizedLimit = Math.min(
    limit ? limit : lastBook,
    lastBook - normalizedOffset,
  );
  if (normalizedOffset === lastBook) {
    return {
      count: 0,
      books: [],
    };
  }

  const filteredList = validatedData.library
    .filter(({ book }) => {
      if (hasProperties(filter)) {
        if (
          "genre" in filter &&
          filter.genre !== undefined &&
          filter.genre !== "All"
        ) {
          if (book.genre !== filter.genre) {
            return false;
          }
        }
        if (
          "pages" in filter &&
          filter.pages !== undefined &&
          typeof filter.pages === "number"
        ) {
          if (book.pages > filter.pages) {
            return false;
          }
        }
      }
      return true;
    })
    .map(({ book }) => book);

  // console.log({ normalizedOffset, normalizedLimit })
  // console.log({ filteredList, filter });
  return {
    count: filteredList.length,
    books: filteredList.slice(
      normalizedOffset,
      normalizedOffset + normalizedLimit,
    ),
  };
};
