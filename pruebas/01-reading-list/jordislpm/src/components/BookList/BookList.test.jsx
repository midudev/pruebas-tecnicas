// import { describe } from "vitest";
import React from "react";
import BookList from ".";
import { render, screen } from "@testing-library/react";


  
        test("BookList title", ()=>{
            const {findByTex} = render(<BookList/>);
            const {element}= findByTex("Lista de libros disponibles")
            expect(element).toBeInTheDocument();
            // render(
            // <BookList/>);
            //     screen.debug();
            // const title = screen.findByText(/Lista de libros disponibles/i);
            // expect(title).toBeInTheDocument()
        })
 
   
