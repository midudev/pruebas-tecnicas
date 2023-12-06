import { useEffect, useState } from 'react'

export function useInterface() {
	const [show, setShow] = useState({
		filters: false,
		readingList: false
	})

	const [width, setWitdh] = useState(window.innerWidth)

	useEffect(() => {
		const updateWidth = () => setWitdh(window.innerWidth)
		window.addEventListener('resize', updateWidth)

		return () => window.removeEventListener('resize', updateWidth)
	}, [])

	const toggleFilters = () => {
		if (show.readingList) {
			setShow({
				filters: true,
				readingList: false
			})
		} else {
			setShow({
				...show,
				filters: !show.filters
			})
		}
	}

	const toogleReadingList = () => {
		if (show.filters) {
			setShow({
				filters: false,
				readingList: true
			})
		} else {
			setShow({
				...show,
				readingList: !show.readingList
			})
		}
	}

	return { width, show, toggleFilters, toogleReadingList }
}
