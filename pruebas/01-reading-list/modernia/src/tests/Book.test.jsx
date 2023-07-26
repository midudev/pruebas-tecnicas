import { render, screen } from '@testing-library/react'
import { test, describe, expect } from 'vitest';
import Book from '../Book';


describe("<Book />", () => {
  const data = {
    title: "The Lord of the Rings",
    alt: "The Lord of the Rings",
    children: "<h1>hola</h1>",
  }
  test("should prop children of a book", () => {
    render(<Book book={data} children={data.children}  />);
    expect(screen.getByText(/hola/i)).toBeDefined();
  });

  test("should alt image of a book", () => {
    render(<Book book={data} children={data.children}  />);
    expect(screen.getByAltText(/The Lord of the Rings/i)).toBeDefined();
  });


}) 