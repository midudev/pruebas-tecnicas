import { useState } from 'react'
import { Card, Image } from 'react-bootstrap'
import { getSypnosis } from '../utils/books'

function Book ({ book, handleDoubleClick, draggableProvided }) {
  const [showInfo, setShowInfo] = useState(true)

  return (
    <Card
      id={book.ISBN === '978-0618640157' ? 'first-book' : book.ISBN}
      data-testid={book.ISBN}
      ref={draggableProvided.innerRef}
      onMouseEnter={() => setShowInfo(false)}
      onMouseLeave={() => setShowInfo(true)}
      onDoubleClick={handleDoubleClick}
      {...draggableProvided.draggableProps}
      {...draggableProvided.dragHandleProps}
      className='rounded-4'
    >
      <div
        style={{
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Image
          src={book.cover}
          alt={book.title}
          style={{
            height: '15rem'
          }}
          className='img-fluid rounded-4'
          loading='lazy' />
        <Card.ImgOverlay
          style={{
            backgroundColor: 'rgba(0,0,0,0.8)',
            transition: 'all 0.5s ease',
            cursor: 'pointer',
            padding: '0.5rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end'
          }}
          className='rounded-4'
          hidden={showInfo}
        >
          <Card.Title
            style={{
              fontSize: '1rem',
              pointerEvents: 'none'
            }}
          >
            {book.title} ({book.year})
          </Card.Title>
          <Card.Subtitle
            className='mb-2 text-muted'
            style={{
              fontSize: '0.8rem',
              pointerEvents: 'none'
            }}
          >
            {book.author.name}
          </Card.Subtitle>

          <Card.Text
            style={{
              fontSize: '0.7rem',
              pointerEvents: 'none'
            }}
          >
            {getSypnosis(book.synopsis)}

            <span>{book.pages} páginas</span>
          </Card.Text>
        </Card.ImgOverlay>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='50'
          height='50'
          fill='currentColor'
          className={`bi bi-heart${book.like ? 'break-fill' : '-fill'}`}
          viewBox='0 0 16 16'
          style={{
            position: 'absolute',
            opacity: 0,
            pointerEvents: 'none'
          }}
        >
          {
            book.like
              ? <path d='M9 1 7 3l2 4-2 3 1 5C23 5 14-2 9 1ZM7 1 6 3l1 4-1 3 1 5C-7 5 3-2 7 1Z' />
              : <path fillRule='evenodd' d='M8 1c4-4 16 4 0 14C-8 5 4-3 8 1z' />
          }
        </svg>
      </div>
    </Card>
  )
}

export default Book
