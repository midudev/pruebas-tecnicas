import { useEffect, useState } from "react";

import { DndContext, closestCenter, PointerSensor, TouchSensor, useSensor, useSensors } from '@dnd-kit/core';
import { arrayMove, SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { SortableItem } from "./SorteableItem";
import SavedBookCard from "../SavedBookCard/SavedBookCard";
import { restrictToVerticalAxis, restrictToFirstScrollableAncestor } from "@dnd-kit/modifiers";
import { changeOrder } from "../../../data/BooksStore";


function SortList({values = [], books = {}}) {

    const [items, setItems] = useState([]);

    useEffect(() => {

        const items = Object.entries(books).sort(([keyA, bookA], [keyB, bookB]) => {

            return bookA.order - bookB.order;
        })

        setItems(items);

    }, [books]);

    const sensors = useSensors(

        useSensor(PointerSensor),
        useSensor(TouchSensor)
    );

    const handleDragEnd = (e) => {

        const {active, over} = e;
        
        if (active.id !== over.id) {

            setItems((items) => {

                const oldIndex = items.findIndex(([key]) => key === active.id);
                const newIndex = items.findIndex(([key]) => key === over.id);
                
                const newOrderItems = arrayMove(items, oldIndex, newIndex);

                changeOrder(newOrderItems)
                .then(result => {

                    console.log(result);
                })

                return newOrderItems;
            });
        }
    }

    return (<ol className="p-0 m-0">

        <DndContext sensors={sensors} collisionDetection={closestCenter} 
        
            modifiers={[restrictToVerticalAxis, restrictToFirstScrollableAncestor]} onDragEnd={handleDragEnd}

            autoScroll={false}
        >

            <SortableContext items={items.map(([key]) => key)} strategy={verticalListSortingStrategy}>
                {
                    items.map(([key, value]) => {

                        const book = value;

                        return <SortableItem key={key} id={key}>

                            <SavedBookCard book={book} />

                        </SortableItem>
                    })
                }
            </SortableContext>

        </DndContext>

    </ol>);
}

export default SortList;