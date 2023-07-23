import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"

import { ElementBookProps } from "../../models/types"

import { IoCloseCircleSharp } from 'react-icons/io5'
import { useBooks } from "../../store"

export default function ReadingBook(props: Omit<ElementBookProps, 'author'> & { index: number }) {

	const removeBookFromList = useBooks(state => state.removeBookFromList)

	const [showClose, setShowClose] = useState(false)

	const handleClick = () => removeBookFromList(props.ISBN)

	return (
		<motion.div
			data-testid='image-on-list'
			id={props.ISBN}
			layout
			initial={{ opacity: 0, left: -50, scale: 1 }}
			animate={{
				left: 0,
				opacity: 1,
				scale: 1 - ((props.index ?? 0) * .025)
			}}
			whileHover={{
				scale: 1
			}}
			onMouseEnter={() => setShowClose(true)}
			onMouseLeave={() => setShowClose(false)}
			exit={{ opacity: 0, left: -50 }}
			className='relative flex justify-center'>
			<img
				src={props.cover}
				className='w-40 h-72 absolute top-0 rounded'
				title={props.title}
				alt={props.title} />
			<motion.div
				title={props.title}
				style={{ height: '4rem' }}
				className='z-20 relative right-0 w-full flex justify-end'
				whileHover={{ height: '8rem' }} >
				<AnimatePresence>
					{
						showClose
						&&
						<motion.button className='relative right-0 h-fit p-1' title='Eliminar' onClick={handleClick}>
							<IoCloseCircleSharp className='text-zinc-300 w-5 h-5' />
						</motion.button>
					}
				</AnimatePresence>
			</motion.div>
		</motion.div>
	)
}