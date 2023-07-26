import { useDispatch } from 'react-redux';
import { allowSave, getBooks } from './store/slices/WhatABook';
import { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Filters } from './components/Filters';
import { Books } from './components/Books';
import { getLocalStorage } from './store/slices/WhatABook';


export const WhatABook = () => {

  const dispatch = useDispatch();

  useEffect(() => {

    dispatch( getBooks() );

  }, []);

  useEffect(() => {

    dispatch(getLocalStorage());
    dispatch(allowSave());

  }, []);

  return (
    <>
    
        <Navbar/>

        <Filters/>

        <Books/>

    </>
  )
}
