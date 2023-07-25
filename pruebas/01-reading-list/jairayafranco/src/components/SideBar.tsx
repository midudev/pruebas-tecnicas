import ReadListCard from './ReadListCard';
import { DndContext, closestCenter } from '@dnd-kit/core';
import { verticalListSortingStrategy, SortableContext, arrayMove } from '@dnd-kit/sortable';
import { useBookStore } from '../store/useBookStore';
import { DragEndEvent } from '@dnd-kit/core';

export default function SideBar() {
    const { toReadBooks, sortReadListBooks } = useBookStore();

    const handleDragEnd = (event: DragEndEvent) => {
        const { active, over } = event;

        const oldIndex = toReadBooks.findIndex(book => book.id === active.id)
        const newIndex = toReadBooks.findIndex(book => book.id === over?.id)
        const newOrder = arrayMove(toReadBooks, oldIndex, newIndex)

        sortReadListBooks(newOrder);
    }

    return (
        <div>
            <h1 className="text-2xl font-bold text-center">Lista de Lectura</h1>
            {
                toReadBooks.length === 0 && (
                    <div className="flex justify-center items-center h-[80vh]">
                        <p className="text-center">No hay libros en la lista de lectura</p>
                    </div>
                )
            }
            <div className="flex flex-col items-center gap-2 m-3" style={{ touchAction: "none" }}>
                <DndContext
                    onDragEnd={handleDragEnd}
                    collisionDetection={closestCenter}
                >
                    <SortableContext
                        items={toReadBooks}
                        strategy={verticalListSortingStrategy}
                    >
                        {
                            toReadBooks.map((book) => (
                                <ReadListCard key={book.id} book={book} />
                            ))
                        }
                    </SortableContext>
                </DndContext>
            </div>
        </div>
    );
}
