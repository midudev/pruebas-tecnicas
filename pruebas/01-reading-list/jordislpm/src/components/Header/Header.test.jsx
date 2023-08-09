// import { describe } from "vitest";
import React from "react";
import Header from ".";
import { render, screen } from "@testing-library/react";
import { expect,describe } from "vitest";



  describe("Header", ()=>{

    test("Title", ()=>{
        render(
        <Header>
            <h2>Book Lover</h2>
        </Header>);  
        expect(screen.findByText(/Book Lover/i).toHaveTextContent(
            'My Name Is: Unknown',
          ))

    })

  })
        
 
   
