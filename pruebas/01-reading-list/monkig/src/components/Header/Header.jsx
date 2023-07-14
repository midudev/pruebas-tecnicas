import MainNavigation from './MainNavigation'

export default function Header () {
  return (
    <header className="bg-yellow-500 h-20 w-full flex items-center justify-between">
        <h1 className='p-2 mx-10'>Books dev</h1>
        <MainNavigation />
    </header>
  )
}
