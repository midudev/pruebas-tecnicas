import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useContext } from "react";
import { DragDropContext, DragUpdate, Draggable, Droppable } from "react-beautiful-dnd";
import { GlobalContext } from "../../contexts/GlobalContext";
import { Col, Space } from "antd";
import { Typography } from 'antd'
import BookToRead from "./BookToRead";
import '../../styles/readlist/interestlist.css'
import { props } from "../booklist/BookList";
const { Text } = Typography

export default function InterestList({ setItemSelected }: props): JSX.Element {

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
    <section>
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
                          <Col span={24}>
                            <BookToRead
                              ISBN={interest.ISBN}
                              read={interest.read}
                            ></BookToRead>
                          </Col>  
                        </div>
                      )}
                    </Draggable>
                  ))
                ) : 
                <div className='IL_Empty-container'>                 
                  <Text 
                    type='secondary'
                    style={{ display: 'block', textAlign: 'center'}} 
                    onClick={() => setItemSelected('booklist')}
                    strong> 
                    This is getting very lonely, why don't you add some books?
                  </Text>
                  <br></br>
                </div> 
                }
              </span>
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </section>
  )
}