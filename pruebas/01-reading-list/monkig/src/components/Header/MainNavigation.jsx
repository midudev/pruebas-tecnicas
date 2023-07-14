import Search from './Search'
import BookButton from './BookButton'
export default function MainNavigation () {
  return (
    <nav className="flex items-center justify-between mx-10">
        <Search />
        <BookButton />
    </nav>
  )
}
