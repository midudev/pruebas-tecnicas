import React, { useContext, useEffect, useState, useReducer } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import { InterestBook, InterestDetails } from '../../types/interestbook';
import BookToRead from "./BookToRead";
import * as ls from 'local-storage'
import { Col, Row, Space } from "antd";
import ReadListActions from "./ReadListActions";
import { DragDropContext, DragUpdate, Draggable, DraggableLocation, Droppable } from 'react-beautiful-dnd'
import '../../styles/booklist.css'
import ReadListSorting from './ReadListSorting';

export default function ReadList(): JSX.Element {

  const { readList, dispatchRl } = useContext(GlobalContext)

  const handleDrop = (droppedItem: DragUpdate) => {
    if (!droppedItem.destination) return;
    let updatedList = [...readList || []];
    const [reorderedItem] = updatedList.splice(droppedItem.source.index, 1);
    updatedList.splice(droppedItem.destination.index, 0, reorderedItem);
    dispatchRl({ type: 'set', payload: updatedList});
  };
     
  return (
    <section style={{ width: "100vw" }}>
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
                {readList?.length ? (
                  readList.map((interest, i) => 
                    (
                    <Draggable
                      key={interest.ISBN}
                      draggableId={interest.ISBN}
                      index={i}
                    >
                      {(provided) => (
                        <div 
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
                    )
                  )
                ) : 
                  <div>Nothing to see here</div>
                }
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </Space>
    </section>
  );
}