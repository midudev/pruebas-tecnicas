import { ListOfBooks } from '@websiteApi/Interfaces';

export interface MasterFilterArgs {
  rangeValue: number;
  genre: string;
  listOfBooks: ListOfBooks;
  searchBy: string;
  inputText: string;
}

export interface PaginationArgs {
  delayInMS?: number
  itemsPerCall?: number;
  listOfBooks: ListOfBooks;
}
