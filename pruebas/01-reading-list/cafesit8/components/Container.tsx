import Filters from './Filters'
import Books from './Books'

export default function Container() {
  return (
    <section className='2xl:w-[1300px] w-full min-h-[886px] flex flex-col gap-10'>
        <Filters />
        <Books />
    </section>
  )
}

