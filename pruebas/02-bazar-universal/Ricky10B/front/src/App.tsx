import React from 'react'
import img from './assets/carro-entrega.webp'
import './App.css'
import { Form } from 'react-router-dom'
import { Search } from './components/Search'
import { ButtonApp } from './components/ButtonApp'
import { useSearch } from './hooks/useSearch'

function App () {
  const { isEmpty, navigateItemsResult } = useSearch()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)
    navigateItemsResult({ formData })
  }

  return (
    <main className='h-[calc(100vh-2rem)] flex flex-col justify-center items-center gap-4'>
      <section className='flex flex-col items-center gap-2'>
        <picture>
          <img
            src={img}
            alt='delivery truck image'
            width='130px'
            height='auto'
          />
        </picture>
        <h1 className='font-bold text-4xl'>Bazar Online</h1>
      </section>

      <Form
        role='search'
        className='flex flex-col gap-5 items-center w-[90%]'
        method='GET'
        onSubmit={handleSubmit}
      >
        <Search />
        <ButtonApp
          text='Buscar'
        />
        {
          isEmpty && (
            <div
              className='bg-red-300 text-red-950 py-1 px-4 rounded-lg text-sm'
              aria-live='polite'
            >
              El campo no puede estar vacío
            </div>
          )
        }
      </Form>
    </main>
  )
}

export default App
