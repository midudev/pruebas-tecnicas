import { useState, useEffect, useContext, Dispatch, SetStateAction } from 'react';
import { GlobalContext } from '../../contexts/GlobalContext'
import Book from './Book'
import { Col, Row, message } from 'antd'
import BookAmount from './BookAmounts';
import SearchBar from './SearchBar';
import Filters from './Filters';
import LazyLoad from 'react-lazy-load';
import '../../styles/booklist.css'
import { SectionSelected } from '../../types/navigation';
import SortBooks from './SortBooks';

type props = { setItemSelected: Dispatch<SetStateAction<number>> }

export default function BookList( { setItemSelected }: props ): JSX.Element {

  const { bookList, readList } = useContext(GlobalContext)

  return (
    <section>
      <BookAmount></BookAmount>
      <SearchBar></SearchBar>
      <SortBooks></SortBooks>
      <Filters></Filters>
      <Row justify={"space-around"} align={"middle"}>
        {bookList &&
          bookList.map((book, i) => (
            <Col span={10} key={i}>
              <LazyLoad
                key={i}
                height={"600px"}
                onContentVisible={() => console.log("loaded")}
                >
                <Book
                  setItemSelected={setItemSelected}
                  bookData={book}
                  selectable={
                    readList?.some((interest) => interest.ISBN === book.ISBN)
                      ? false
                      : true
                  }
                ></Book>
              </LazyLoad>
            </Col>
          ))}
      </Row>
    </section>
  );
}