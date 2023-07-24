import style from './Header.module.css'
import { IconButton } from './IconButton'
import FiltersIcon from './icons/FiltersIcon'
import ListIcon from './icons/ListIcon'

export function Header({ toggleFilters, toogleReadingList, elements }) {
	return (
		<header className={style.header}>
			<IconButton
				className={style.menu}
				icon={FiltersIcon}
				onClick={toggleFilters}
				transparent
			/>
			<h1>Lista de libros</h1>
			<div className={style.menuContainer}>
				<IconButton
					className={style.menu}
					icon={ListIcon}
					onClick={toogleReadingList}
					transparent
				/>
				<span className={style.badge}>{elements}</span>
			</div>
		</header>
	)
}
