import { useState, useEffect, useContext, Dispatch, SetStateAction } from 'react';
import { GlobalContext } from '../../contexts/GlobalContext'
import Book from './Book'
import { Col, Row, Space, message } from 'antd'
import BookAmount from './BookAmounts';
import SearchBar from './SearchBar';
import Filters from './Filters';
import LazyLoad from 'react-lazy-load';
import '../../styles/booklist/booklist.css'
import { SectionSelected } from '../../types/navigation';
import SortBooks from './SortBooks';
import '../../styles/global-variables.css'

type props = { setItemSelected: Dispatch<SetStateAction<number>> }

export default function BookList( { setItemSelected }: props ): JSX.Element {

  const { bookList, readList, wWidth } = useContext(GlobalContext)

  return (
    <section id='BL_container'>
      <Row justify={'space-between'} id='BL_control'>
        <Col>
          <Space size={'small'} direction='vertical'>
            <SearchBar></SearchBar>
            <SortBooks></SortBooks>
          </Space>
        </Col>
        <Col>
          <BookAmount></BookAmount>
        </Col>
      </Row>
      <Filters></Filters>
      <Row justify={"space-around"} align={"middle"} className='BL_row'>
        {bookList &&
          bookList.map((book, i) => (
            <Col span={
              wWidth > 1600 ? 4 :
              wWidth < 1600 && wWidth >= 1275 ? 5 : 
              wWidth < 1275 && wWidth >= 822 ? 7 : 
              wWidth < 822 && wWidth > 450 ? 10 : 20
            } key={i}>
              <LazyLoad
                key={i}
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