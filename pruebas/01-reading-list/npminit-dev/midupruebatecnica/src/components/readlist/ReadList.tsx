import React, { useContext, useEffect, useState, useReducer } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import { InterestBook, InterestDetails } from '../../types/interestbook';
import BookToRead from "./BookToRead";
import * as ls from 'local-storage'
import { Col, Row, Space } from "antd";
import ReadListActions from "./ReadListActions";
import { DragDropContext, DragUpdate, Draggable, DraggableLocation, Droppable } from 'react-beautiful-dnd'
import '../../styles/readlist/readlist.css'
import ReadListSorting from './ReadListSorting';
import { useAutoAnimate } from "@formkit/auto-animate/react";
import '../../styles/global-variables.css'

export default function ReadList(): JSX.Element {

  const { readList, dispatchRl } = useContext(GlobalContext)
  const [ AAParent, enableAnimation ] = useAutoAnimate({})

  const handleDrop = (droppedItem: DragUpdate) => {
    enableAnimation(false)
    if (!droppedItem.destination) return;
    let updatedList = [...readList || []];
    const [reorderedItem] = updatedList.splice(droppedItem.source.index, 1);
    updatedList.splice(droppedItem.destination.index, 0, reorderedItem);
    dispatchRl({ type: 'set', payload: updatedList});
    setTimeout(() => enableAnimation(true))
  };
     
  return (
    <section id='RL-container'>
      <Row justify={'space-between'} align={'middle'}>
        <Col span={8}>
          <ReadListActions></ReadListActions>
        </Col>
        <Col>
          <ReadListSorting></ReadListSorting>
        </Col>
      </Row>
      <Space size={"small"} direction="vertical" style={{ width: "100vw" }}>
        <DragDropContext onDragEnd={handleDrop}>
          <Droppable droppableId="list-container">
            {(provided) => (
              <div
                className="list-container"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                <span ref={AAParent} id="AutoAnimate-parent">
                  {readList?.length ? (
                    readList.map((interest, i) => (
                      <Draggable
                        key={interest.ISBN}
                        draggableId={interest.ISBN}
                        index={i}
                      >
                        {(provided, snapshot) => (
                          <div 
                            className={snapshot.isDragging ? 
                              'Btr_drag-container_dragging Btr_drag-container' : 
                              'Btr_drag-container'
                            }
                            ref={provided.innerRef}
                            {...provided.dragHandleProps}
                            {...provided.draggableProps}
                          >
                            <BookToRead
                              ISBN={interest.ISBN}
                              read={interest.read}
                            ></BookToRead>
                          </div>
                        )}
                      </Draggable>
                    ))
                  ) : 
                    <div>Nothing to see here</div>
                  }
                </span>

                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </Space>
    </section>
  );
}