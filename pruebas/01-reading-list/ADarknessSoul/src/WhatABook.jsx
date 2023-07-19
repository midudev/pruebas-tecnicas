import { useDispatch } from 'react-redux';
import { getBooks } from './store/slices/WhatABook';
import { useEffect } from 'react';
import { Navbar } from './components/Navbar';


export const WhatABook = () => {

  const dispatch = useDispatch();

  useEffect(() => {

    dispatch( getBooks() );

  }, []);

  return (
    <>
    
        <Navbar/>
    
    </>
  )
}
