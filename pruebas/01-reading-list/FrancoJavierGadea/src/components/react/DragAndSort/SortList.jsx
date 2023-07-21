import { useEffect, useState } from "react";

import { DndContext, closestCenter, PointerSensor, TouchSensor, useSensor, useSensors } from '@dnd-kit/core';
import { arrayMove, SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { SortableItem } from "./SorteableItem";
import SavedBookCard from "../SavedBookCard/SavedBookCard";
import { restrictToVerticalAxis, restrictToFirstScrollableAncestor } from "@dnd-kit/modifiers";


function SortList({values = [], books = {}}) {

    const [items, setItems] = useState([]);

    useEffect(() => {
        
        setItems(Object.keys(books));

    }, [books]);

    const sensors = useSensors(

        useSensor(PointerSensor),
        useSensor(TouchSensor)
    );

    const handleDragEnd = (e) => {

        const {active, over} = e;
        
        if (active.id !== over.id) {

            setItems((items) => {

                const oldIndex = items.indexOf(active.id);
                const newIndex = items.indexOf(over.id);
                
                return arrayMove(items, oldIndex, newIndex);
            });
        }
    }

    return (<ol className="p-0 m-0">

        <DndContext sensors={sensors} collisionDetection={closestCenter} 
        
            modifiers={[restrictToVerticalAxis, restrictToFirstScrollableAncestor]} onDragEnd={handleDragEnd}

            autoScroll={false}
        >

            <SortableContext items={items} strategy={verticalListSortingStrategy}>
                {
                    items.map(key => {

                        const book = books[key];

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