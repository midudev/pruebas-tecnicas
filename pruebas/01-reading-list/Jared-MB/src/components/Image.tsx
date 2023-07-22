import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

import { CgClose } from 'react-icons/cg'
import { useBooks } from "../store"

interface CustomProps {
	onList?: boolean,
	ISBN: string,
	index?: number
}

export default function Image(props: React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> & CustomProps) {

	const { addBookToList, removeBookFromList } = useBooks()
	const [showClose, setShowClose] = useState(false)

	const handleClick = () => {
		const ISBN = props.ISBN

		if (props.onList) {
			removeBookFromList(ISBN)
			return
		}
		addBookToList(ISBN)
	}

	if (!props.onList) {
		return (
			<motion.img
				layout
				id={props.ISBN}
				src={props.src}
				initial={{ opacity: 0, left: -50 }}
				whileInView={{
					left: 0, opacity: 1
				}}
				whileHover={{
					scale: 1.05
				}}
				viewport={{ once: true }}
				exit={{ opacity: 0, left: -50 }}
				className='w-40 h-72 cursor-pointer rounded'
				onClick={handleClick}
				title={props.title}
				alt={props.title}
			/>
		)
	}

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
				src={props.src}
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
						<motion.button className='relative right-0 h-fit' title='Eliminar' onClick={handleClick}>
							<CgClose className='text-purple-700' />
						</motion.button>
					}
				</AnimatePresence>
			</motion.div>
		</motion.div>
	)
}