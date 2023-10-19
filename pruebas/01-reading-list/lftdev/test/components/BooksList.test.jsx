import { afterEach, describe, expect, it } from 'vitest'
import BooksList from '../../src/components/BooksList'
import { cleanup, getByRole, render, screen } from '@testing-library/react'
import BooksJSON from '../books.json'

const list = BooksJSON.library.map(bookObj => bookObj.book)
describe('BooksList', () => {
  afterEach(cleanup)
  it('should render correctly;', () => render(<BooksList list={list} />))
  it('should render an ul;', () => {
    render(<BooksList list={list} />)
    screen.getByRole('list')
  })
  it('should render li as ul children;', () => {
    render(<BooksList list={list} />)
    screen.getAllByRole('listitem')
  })
  it('should render an article as li child;', () => {
    render(<BooksList list={list} />)
    screen.getAllByRole('listitem').forEach(li => {
      getByRole(li, 'article')
    })
  })
  it('should render an img as article child;', () => {
    render(<BooksList list={list} />)
    screen.getAllByRole('article').forEach(article => {
      getByRole(article, 'img')
    })
  })
  it('should set the correct src for each img;', () => {
    render(<BooksList list={list} />)
    screen.getAllByRole('listitem').forEach((li, index) => {
      const img = getByRole(li, 'img')
      expect(img.getAttribute('src')).toBe(list[index].cover)
    })
  })
  it('should render a button on each BooksList item when they are removable;', () => {
    render(<BooksList list={list} removableItems />)
    screen.getAllByRole('button')
  })
})
