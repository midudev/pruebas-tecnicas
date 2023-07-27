import { IS_EMPTY } from '../constants'

function DroppableGrid ({ children, id, droppableProvided, droppableSnapshot }) {
  const IS_ARRAY = Array.isArray(children)

  const style = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(110px, 1fr))',
    gap: '10px'
  }

  return (
    <article
      id={id}
      ref={droppableProvided.innerRef}
      style={IS_ARRAY ? style : {}}
      className={(IS_ARRAY || children !== IS_EMPTY) && droppableSnapshot.isDraggingOver ? 'border-3 border-black-50 dotted' : ''}
      {...droppableProvided.droppableProps}
    >
      {children}
      {droppableProvided.placeholder}
    </article>
  )
}

export default DroppableGrid
