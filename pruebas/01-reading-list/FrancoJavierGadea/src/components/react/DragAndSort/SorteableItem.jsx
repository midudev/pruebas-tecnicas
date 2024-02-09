import React from 'react';
import {useSortable} from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';

import "./sort.css";

export function SortableItem(props) {

    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({id: props.id});
    
    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };
  
    return (<li className="sort-item p-1 rounded" ref={setNodeRef} style={style} >

        <button className="sort-btn" {...attributes} {...listeners} title="Mover">

            <i className="bi bi-grip-vertical" />
        </button>

        <div className="sort-content">{props.children}</div>

    </li>);
}