import { Droppable, Draggable } from 'react-beautiful-dnd'
import Card from '../card/Card'

import { LIST_NAME } from '../../constant/constants'

const BookList = ({ title, books, droppableId, id }) => {
    const { AVAILABLE_BOOKS } = LIST_NAME
    const isBookAvailable = () => droppableId === AVAILABLE_BOOKS //TODO Review
    // <ul className={'sticky top-20'}> TODO Review

    return (
        <Droppable droppableId={droppableId}>
            {(provided) => (
                <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    className="flex-1 min-w-full md:min-w-0"
                    id={id}
                >
                    <ul>
                        <h2 className="flex items-center justify-center pb-5">
                            {title}
                        </h2>
                        {books.map((item, index) => {
                            if (!item) return null
                            const { book } = item
                            return (
                                <Draggable
                                    key={book.ISBN}
                                    draggableId={book.ISBN}
                                    index={index}
                                >
                                    {(provided) => (
                                        <li
                                            key={book.ISBN}
                                            ref={provided.innerRef}
                                            className="flex justify-center p-2"
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                        >
                                            <Card
                                                book={book}
                                                isAvailable={isBookAvailable}
                                            />
                                        </li>
                                    )}
                                </Draggable>
                            )
                        })}
                    </ul>
                </div>
            )}
        </Droppable>
    )
}

export default BookList
