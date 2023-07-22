'use client';
import { useBookStore } from '@store/bookStore';
import { useEffect, useRef, useState } from 'react';
import { useLocalStorage } from './useLocalStorage';

const useBook = () => {
  const { books, cartBooks, addBook, clearBooks, removeBook, addBooks, error, message, clearMessage } =
    useBookStore();
  useLocalStorage();
  const [loading, setLoading] = useState(true);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const newCartBooks = JSON.parse(global.localStorage?.getItem('cartBooks') ?? '[]') ?? [];
    if (newCartBooks) setLoading(false);
    addBooks(newCartBooks);
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

  return { books, cartBooks, error, message, loading, addBook, clearBooks, removeBook, clearMessage };
};

export default useBook;
