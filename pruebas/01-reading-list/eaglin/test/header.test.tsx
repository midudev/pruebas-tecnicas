
import {render , screen,cleanup} from '@testing-library/react'
import { beforeEach, describe,it } from "vitest";
import HeaderComponent from '../src/components/Header';
import React from 'react';

describe('filter', ():void =>{
    beforeEach(cleanup)
    it('HeaderComponent Should Render',():void=>{
        const handleChageCategory = (event: React.ChangeEvent<HTMLSelectElement>) => {}
render(<HeaderComponent handleChageCategory={handleChageCategory}></HeaderComponent>)

    })
    it('HeaderComponent Should Render Titles',():void=>{
        const handleChageCategory = (event: React.ChangeEvent<HTMLSelectElement>) => {}
render(<HeaderComponent handleChageCategory={handleChageCategory}></HeaderComponent>)

screen.getByText(/Libros disponibles/)
screen.getByText(/Libros en lectura/)
    })
})