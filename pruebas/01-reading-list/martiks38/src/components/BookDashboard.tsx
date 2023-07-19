'use client'

// import { useId, useRef, useState } from 'react'

import homeStyles from '@/assets/styles/Home.module.css'
import { books, genres } from '@/assets/values'
import { FilterSection } from './Filter/FilterSection'

export function BookDashboard() {
  return (
    <>
      <FilterSection />
      <article className={homeStyles.homeMain__bookDashboard}>
        <section className={homeStyles.homeMain__bookListSection}>
          <h2 className={homeStyles.homeMain__bookListSection__title}>Libros disponibles</h2>
          <ul>
            {/* {books.map((book) => {
              return (
                <li>
                  <img src={book.cover} alt='' width='120' height='180' />
                </li>
              )
            })} */}
          </ul>
        </section>
        <section className={homeStyles.homeMain__bookListSection}>
          <h2 className={homeStyles.homeMain__bookListSection__title}>Lista de lectura</h2>
        </section>
      </article>
    </>
  )
}
