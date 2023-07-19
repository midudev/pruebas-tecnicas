import Image from 'next/image'

import homeStyles from '@/assets/styles/Home.module.css'
import headerStyles from '@/assets/styles/HeaderPage.module.css'

import logo from './icon.svg'
import { SuggestBook } from '@/components/SuggestBook'
import { BookDashboard } from '@/components/BookDashboard'

export default function Home() {
  return (
    <>
      <header className={headerStyles.headerPage}>
        <h1 aria-label='Reading List'>
          <Image
            src={logo}
            alt='Reading List'
            width={36}
            height={36}
            className={headerStyles.headerPage__logo}
          />
        </h1>
      </header>
      <main className={homeStyles.homeMain}>
        <section className={homeStyles.homeMain__suggestSection}>
          <SuggestBook />
        </section>
        <BookDashboard />
      </main>
    </>
  )
}
