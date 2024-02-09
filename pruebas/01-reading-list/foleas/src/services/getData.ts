import { Book, Library } from "../types";

export const getData = async (endpoint: string): Promise<Array<Book>> => {
  const response = await fetch(endpoint);
  const data = (await response.json()) as Library;
  return data.library;
};
