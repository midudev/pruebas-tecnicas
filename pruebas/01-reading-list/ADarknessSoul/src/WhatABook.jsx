import { useDispatch } from 'react-redux';
import { getBooks } from './store/slices/WhatABook';
import { useEffect } from 'react';


export const WhatABook = () => {

  const dispatch = useDispatch();

  useEffect(() => {

    dispatch( getBooks() );

  }, []);

  return (
    <>
    
        
    
    </>
  )
}
