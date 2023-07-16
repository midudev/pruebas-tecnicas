'use client';
import { useBookStore } from '@store/bookStore';
import { useEffect, useRef, useState } from 'react';

const useBook = () => {
  const { books, addBook, clearBooks, removeBook, addBooks, error, message, clearMessage } = useBookStore();
  const [loading, setLoading] = useState(true);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const newBooks = JSON.parse(global.localStorage?.getItem('books') ?? '[]') ?? [];
    if (newBooks) setLoading(false);
    addBooks(newBooks);
  }, [addBooks]);

  useEffect(() => {
    if (message.length > 0) {
      clearTimeout(Number(timeoutRef.current));
      timeoutRef.current = setTimeout(() => clearMessage(), 15000);
    }
    return () => {
      clearTimeout(Number(timeoutRef.current));
    };
  }, [clearMessage, message]);

  return { books, error, message, loading, addBook, clearBooks, removeBook, clearMessage };
};

export default useBook;
