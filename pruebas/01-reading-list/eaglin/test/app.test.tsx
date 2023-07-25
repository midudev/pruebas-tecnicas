
import {getAllByTitle, render , screen,cleanup, fireEvent} from '@testing-library/react'
import { afterEach, beforeAll, beforeEach, describe,it } from "vitest";
import HeaderComponent from '../src/components/Header';
import React from 'react';
import App from '../src/App';

describe('App component', ():void =>{
    beforeEach(cleanup)
    it('Should Render Header and Books',():void=>{

render(<App ></App>)


    })
    it('HeaderComponent Should Render',():void=>{

render(<App ></App>)
 const img = screen.getByText(/Libros disponibles/)
 const books = screen.getByRole('main-books')
 const readBooks = screen.getByRole('books-to-read')




    })


    it('Should reduce books',():void=>{

        render(<App ></App>)
       const filterButton =  screen.getByRole('combobox')
       const option =  screen.getAllByRole('option')

       fireEvent.change(filterButton,{selectValue: 'Terror'})
       const books = screen.getByText(/Libros en lectura/)
       console.log(books)

            })
})