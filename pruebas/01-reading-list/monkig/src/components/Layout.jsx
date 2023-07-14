import AvailableBooksSection from './AvailableBooksSection'
import ReadingList from './ReadingList'
export default function Layout () {
  return (
    <section className='mx-10'>
        <AvailableBooksSection />
        <ReadingList/>
    </section>
  )
}
