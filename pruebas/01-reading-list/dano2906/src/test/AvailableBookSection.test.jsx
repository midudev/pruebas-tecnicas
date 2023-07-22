/* eslint-disable no-undef */
import { render } from '@testing-library/react'
import AvailableBooksSection from '../components/AvailableBooksSection'
import data from '../../public/books.json' assert { type:'json'}

describe('App', () => {
  test('Should render the component', () => {
    render(<AvailableBooksSection />)
  })
  test('Should render the component with data', async () => {
    render(<AvailableBooksSection books={data.library}/>)
  })
})
