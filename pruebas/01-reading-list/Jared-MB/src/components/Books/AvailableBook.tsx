import { motion } from "framer-motion"
import { useBooks } from "../../store"
import { ElementBookProps } from "../../models/types"

export default function AvailableBook(props: ElementBookProps) {

	const addBookToList = useBooks(state => state.addBookToList)

	const handleClick = () => addBookToList(props.ISBN)

	return (
		<motion.div
			layout
			id={props.ISBN}
			whileHover={{
				scale: 1.05
			}}
			initial={{ opacity: 0, left: -50 }}
			whileInView={{
				left: 0, opacity: 1
			}}
			viewport={{ once: true }}
			exit={{ opacity: 0, left: -50 }}
			onClick={handleClick}
			className='relative cursor-pointer rounded z-30'>
			<img
				src={props.cover}
				className='w-40 h-72 rounded'
				title={props.title}
				alt={props.title}
			/>
			<div className='absolute bottom-0 bg-zinc-800 rounded-b w-full h-1/5 px-2 py-1 flex flex-col justify-evenly border-t-2 border-t-purple-700'>
				<h4 className='text-sm text-zinc-300 font-medium truncate' title={props.title}>{props.title}</h4>
				<span className='text-xs text-purple-700 font-light'>{props.author.name}</span>
			</div>
		</motion.div>
	)
}