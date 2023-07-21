import { useBook, useFilter } from '../hooks'
import { useMenu } from '../store'
import { Badge } from './Badge'
import { GenresFilter } from './GenresFilter'
import { OpenBook } from './Icons'
import { PageFilter } from './PageFilter'
import { TitleFilter } from './TitleFilter'

export const Header = () => {
  const { maxPages, favorites } = useBook()
  const { pageFilter, updatePageFilter, updateTitleFilter } = useFilter()
  const { onOpen } = useMenu()

  return (
		<header className="flex flex-col gap-4 w-full">
			<div className="flex flex-col lg:flex-row gap-4 justify-between items-start w-full">
				<div className="flex justify-between items-center w-full">
					<h2 className="font-bold text-2xl text-left">Available Books</h2>
					<button className="relative flex lg:hidden" onClick={onOpen}>
						<OpenBook />
						<Badge className='top-[-10px] right-[-10px] bg-red-500 rounded-full text-white w-5 h-5' value={favorites.length} />
					</button>
				</div>
				<div className="flex justify-center items-center gap-6 w-full">
					<TitleFilter updateTitleFilter={updateTitleFilter} />
					<PageFilter maxPages={maxPages} pageFilter={pageFilter} updatePageFilter={updatePageFilter} />
				</div>
			</div>
			<GenresFilter />
		</header>
  )
}
