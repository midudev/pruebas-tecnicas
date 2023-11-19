export interface Book {
  title: string;
  pages: number;
  genre: string;
  cover: string;
  synopsis: string;
  year: number;
  ISBN: string;
  author: Author;
}

export interface Author {
  name: string;
  otherBooks: string[];
}

export interface AutocompleteBook {
  label: string;
  id: string;
}

export enum Priority {
  High = "High",
  Medium = "Medium",
  Low = "Low",
}
