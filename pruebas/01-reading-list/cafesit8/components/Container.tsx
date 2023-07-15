import Filters from './Filters'
import Books from './Books'

export default function Container() {
  return (
    <section className='2xl:w-[1300px] w-full border-2 border-black'>
        <Filters />
        <Books />
    </section>
  )
}

