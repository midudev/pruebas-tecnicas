import { Droppable, Draggable } from 'react-beautiful-dnd'
import Card from '../card/Card'

const BookList = ({ title, books, droppableId }) => {
    const isBooksSelected = () => droppableId !== 'list1' //TODO Review

    return (
        <Droppable droppableId={droppableId}>
            {(provided) => (
                <ul {...provided.droppableProps} ref={provided.innerRef}>
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
                                        className="pb-4"
                                        key={book.ISBN}
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                    >
                                        <Card
                                            book={book}
                                            isSelected={isBooksSelected}
                                        />
                                    </li>
                                )}
                            </Draggable>
                        )
                    })}
                </ul>
            )}
        </Droppable>
    )
}

export default BookList
