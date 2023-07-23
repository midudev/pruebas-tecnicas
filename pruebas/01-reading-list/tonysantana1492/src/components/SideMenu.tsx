import { useMenu } from '../store'
import { Favorites } from './Favorites'

export const SideMenu = () => {
  const { onClose } = useMenu()

  return (
		<nav
			role='nav'
			onClick={onClose}
			className="fixed top-0 right-0 backdrop-blur-sm bg-[#6565659e] w-full h-screen flex justify-end"
		>
			<Favorites />
		</nav>
  )
}
