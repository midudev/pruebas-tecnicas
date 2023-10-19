export const getNumAvaileblesBooksFunction = ({ readingList }: IBooks.Store) =>
  (filteredBooks: IBook[]) => {
    return filteredBooks.filter(b => !readingList.includes(b.ISBN)).length
  };