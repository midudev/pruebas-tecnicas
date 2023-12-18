import './App.css'
import React, { useState } from 'react'
import type { Item, Id } from './types/types'

const INITIAL_ITEMS: Item[] = [
  { id: crypto.randomUUID(), name: 'Mouse inalámbrico' },
  { id: crypto.randomUUID(), name: 'TV Led Samsung 55"' }
]

function App () {
  const [textValue, setTextValue] = useState<string>('')
  const [items, setItems] = useState<Item[]>(INITIAL_ITEMS)

  const handleAddItem = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (textValue === '') return
    if (textValue.length < 3) return alert('Ingresa por lo menos 3 caracteres')

    const newItem: Item = {
      id: crypto.randomUUID(),
      name: textValue
    }

    setItems((prevItems) => [...prevItems, newItem])
    setTextValue('')
  }

  const handleDeleteItem = (id: Id) => {
    const filteredItems = items.filter(item => item.id !== id)
    setItems(filteredItems)
  }

  return (
    <main>
      <section>
        <form onSubmit={handleAddItem} aria-label='Formulario para carga de items'>
          <label>
            Ingresa un elemento:
            <input
              type='text'
              value={textValue}
              onChange={(e) => setTextValue(e.target.value)}
            />
          </label>
          <button type='submit'>Agregar</button>
        </form>
      </section>
      <section className='elements'>
        {items.length === 0
          ? <h2>No hay elementos...</h2>
          : (
            <ul>
              {items.map(({ name, id }) => (
                <li key={id} onClick={() => handleDeleteItem(id)}>
                  <h2>{name}</h2>
                </li>
              ))}
            </ul>
            )}
      </section>
    </main>
  )
}

export default App
