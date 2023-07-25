/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */

import { describe, it, expect, afterEach } from 'vitest';
import { newJSONBook as JSONBook } from '../config/jsonBookProps';
import { render, screen, cleanup } from '@testing-library/react';
import BookContainerCard from '../components/BookContainerCard';
import { Book } from '../interfaces/Book';

describe('JSONBook Test', () => {
    it('Should return an object', () => {
        expect(typeof JSONBook).toEqual('object')
    })

    it('Should return an object with the property library with a non-empty array', () => {
        expect(JSONBook).toHaveProperty('library')
        expect(Array.isArray(JSONBook.library)).toBeTruthy()
        expect(JSONBook.library.length).greaterThan(0)
    })
})

describe('BookContainerCard Test', () => {
    afterEach(cleanup as () => void)
    const book = JSONBook.library[0].book as Book

    it('Should render a BookContainerCard component', () => {
        render(<BookContainerCard book={book} />)
    })

    it('Should find a button with text "📖 Agregar a lista" and click it', () => {
        render(<BookContainerCard book={book} />)
        const button = screen.getByText('📖 Agregar a lista')
        expect(button).toBeInstanceOf(HTMLButtonElement)
        button.click()
    })
})