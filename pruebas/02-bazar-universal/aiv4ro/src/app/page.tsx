import { SearchForm } from '@/components/SearchForm'

export default function Home () {
  return (
    <main className='h-screen flex flex-col items-center justify-center'>
      <h1 className='text-2xl font-bold'>Bazar Online</h1>
      <SearchForm>
        <button className='w-min px-5 py-3 bg-zinc-800 hover:bg-zinc-700 transition-colors'>Buscar</button>
      </SearchForm>
    </main>
  )
}
