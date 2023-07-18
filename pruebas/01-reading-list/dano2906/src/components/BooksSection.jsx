import AvailableBooksSection from './AvailableBooksSection'
import ReadList from './ReadList'

export default function BooksSection () {
  return (
    <section className='w-screen h-auto'>
      <AvailableBooksSection />
      <ReadList />
    </section>
  )
}
