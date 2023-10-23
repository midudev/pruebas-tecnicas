import SearchBox from '@/components/searchbox'
import Image from 'next/image'

export default function Home () {
  return (
    <main className="flex justify-center items-center flex-col gap-4 h-screen bg-brand">
      <section>
        <Image
          src='/bazar-truck.png'
          alt='app logo'
          width={120}
          height={120}
          className='mx-auto'
          priority
        />
        <h1 className="font-title text-4xl font-bold tracking-tighter">
          Bazar Online
        </h1>
      </section>
      <SearchBox />
    </main>
  )
}
