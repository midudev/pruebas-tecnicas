import { useState } from "react";
import json from "./json/books.json";

interface Book {
  title: string;
  pages: number;
  genre: string;
  cover: string;
  synopsis: string;
  year: number;
  ISBN: string;
  author: {
    name: string;
    otherBooks: string[];
  };
}

function App() {
  return (
    <>
   
    </>
  );
}

export default App;
