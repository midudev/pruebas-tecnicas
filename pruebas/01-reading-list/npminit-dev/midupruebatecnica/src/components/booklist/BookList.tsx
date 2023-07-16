import { useState, useEffect, useContext, Dispatch, SetStateAction } from 'react';
import { GlobalContext } from '../../contexts/GlobalContext'
import Book from './Book'
import { Col, Row } from 'antd'

export default function BookList(): JSX.Element {

  const { bookList, readList } = useContext(GlobalContext)

  return (
    <section>
      <Row justify={"space-around"} align={"middle"} gutter={[12, 12]}>
        { bookList &&
          bookList.map((book, i) => 
            <Col span={10} key={i}>
              <Book
                bookData={book}
                selectable={ readList?.some(interest => interest.ISBN === book.ISBN) ? false : true }
                key={i}
              ></Book>
            </Col>
          )}
      </Row>
    </section>
  );
}