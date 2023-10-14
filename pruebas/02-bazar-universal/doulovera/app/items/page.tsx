import Link from 'next/link'
import Image from 'next/image'

import SearchBox from '@/components/searchbox'
import ResultsLength from '@/components/items/results-length'

export function ItemsHeader ({ children }: { children?: React.ReactNode }) {
  return (
    <header className="w-full py-4 bg-brand">
      <div className="w-5/6 max-w-xs mx-auto">
        <section className="flex items-center justify-between mb-4">
          <Link href="/">
            <Image
              src='/bazar-truck.png'
              alt='app logo'
              width={55}
              height={55}
            />
          </Link>
          <SearchBox isMini />
        </section>
        <section>
          {children}
        </section>
      </div>
    </header>
  )
}

export default function Items () {
  return (
    <main className="flex justify-center items-center flex-col gap-4">
      <ItemsHeader>
        <ResultsLength />
      </ItemsHeader>
    </main>
  )
}
