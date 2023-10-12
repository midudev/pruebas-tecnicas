'use client'

export default function SearchBox () {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log('clin clin')
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="default-search" className="mb-2 text-sm font-medium sr-only">Search</label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
          </svg>
        </div>
        <input type="search" className="block w-80 p-4 pl-10 text-sm bg-brand-light border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" placeholder="Laptops, smartphones..." required />
      </div>
    </form>
  )
}