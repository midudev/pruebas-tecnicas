import { pageChanged } from '../actions/filtersActions'
import { IconButton } from './IconButton'
import ArrowLeft from './icons/ArrowLeft'
import ArrowRight from './icons/ArrowRight'
import style from './PageSelector.module.css'

export function PageSelector({ page, totalPages, dispatchFilters }) {
	return (
		<div className={style.container}>
			<IconButton
				type='button'
				icon={ArrowLeft}
				handleClick={() => dispatchFilters(pageChanged(page - 1))}
				disabled={page === 1}
				aria-label='previous-page'
			/>
			<span>
				Página {page} de {totalPages}
			</span>
			<IconButton
				type='button'
				icon={ArrowRight}
				handleClick={() => dispatchFilters(pageChanged(page + 1))}
				disabled={page === totalPages}
				aria-label='next-page'
			/>
		</div>
	)
}
