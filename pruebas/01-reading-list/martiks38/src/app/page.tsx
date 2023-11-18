import Image from 'next/image'

import { SuggestBook } from '@/components/SuggestBook'
import { BookDashboard } from '@/components/BookDashboard'

import homeStyles from '@/assets/styles/Layout/Home.module.css'
import headerStyles from '@/assets/styles/Layout/HeaderPage.module.css'

import logo from './icon.svg'

export default function Page() {
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
        <SuggestBook />
        <BookDashboard />
      </main>
    </>
  )
}
