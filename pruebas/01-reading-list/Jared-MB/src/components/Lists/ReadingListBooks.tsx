import { AnimationGroup } from '..'

import { useBooks } from "../../store";
import { ReadingBook } from '../Books';
import ListLayout from './ListLayout';

import { motion } from 'framer-motion';

import Empty from '../../assets/Empty.svg'

export default function ReadingListBooks() {

	const readingListBooks = useBooks(state => state.readingListBooks)

	return (
		<ListLayout title={`Lista de lectura (${readingListBooks.length})`}>
			<div className='flex justify-center items-center'>
				<div data-testid='reading-list-books' className='w-40'>
					<AnimationGroup>
						{
							readingListBooks.length > 0
								?
								readingListBooks.map((book, idx) => (
									<ReadingBook key={book.ISBN} cover={book.cover} ISBN={book.ISBN} index={idx} title={book.title} />
								)).reverse()
								:
								<motion.div
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0 }}
									className='flex flex-col justify-center gap-4 h-96'>
									<img src={Empty} alt='Lista de libros vacía' />
									<span className='text-zinc-500 text-sm text-center inline-block'>Aún no tienes libros en tu lista de lectura</span>
								</motion.div>
						}
					</AnimationGroup>
				</div>
			</div>
		</ListLayout>
	)
}