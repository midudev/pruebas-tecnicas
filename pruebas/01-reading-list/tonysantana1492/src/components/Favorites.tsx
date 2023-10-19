import { useBook } from '../hooks/useBook'
import { useMenu } from '../store'
import { FavoriteList } from './FavoriteList'
import { Close } from './Icons'

export const Favorites = () => {
  const { favorites } = useBook()
  const { isOpen, onClose } = useMenu()

  const handleCloseMenu = () => {
    onClose()
  }

  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.stopPropagation()
  }

  return (
		<div onClick={handleClick} className="bg-gray-200 p-4 rounded-tl-3xl items-center overflow-hidden overflow-y-auto h-full lg:h-full w-96">
			<div className="flex justify-between items-center w-full mb-4">
				<div className="flex gap-5">
					<h2 className="font-bold text-lg">My reading list</h2>
					<div className="bg-red-500 rounded-full text-white flex justify-center items-center w-6 h-6">
						<p className="font-bold text-xs text-center">{favorites.length}</p>
					</div>
				</div>
				{isOpen && (<button role='open-side-menu' onClick={handleCloseMenu}>
					<Close />
				</button>)}
			</div>

			<FavoriteList books={favorites} />
		</div>
  )
}
