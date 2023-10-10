import { SearchForm } from '@/components/SearchForm'

export default function Layout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <header className='flex items-center justify-center gap-5 px-2'>
        <h1 className='text-2xl font-semibold'>
          Bazar
        </h1>
        <SearchForm />
      </header>
      {children}
    </>
  )
}
