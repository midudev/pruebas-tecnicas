import { useContext, useMemo } from 'react';
import MainCtx from '@commonContext/MainCtx/MainCtx';
import getBooks from '@websiteApi/getBooks';

const listOfBooksLength = getBooks().length;

export default function useInfo() {
  const { states: { booksAdded } } = useContext(MainCtx);

  const availableText = useMemo(() => (
    `${listOfBooksLength - booksAdded.length} available books`
  ), [booksAdded]);

  const addedText = useMemo(() => (
    booksAdded.length ? `${booksAdded.length} in the reading list` : null
  ), [booksAdded]);

  return { availableText, addedText };
}
