import { Row, Col } from "antd";
import { useContext, useEffect, useState } from "react";
import { Book } from "../../types/books";
import { GlobalContext } from "../../contexts/GlobalContext";
import GenreFilter from "./GenreFilter";
import PagesNumFilter from "./PagesNumFilter";

export default function Filters(): JSX.Element {

  const { bookList, setBookList } = useContext(GlobalContext)

  return (
    <section>
      <Row>
        <Col>
          <GenreFilter></GenreFilter>
        </Col>
        <Col>
          <PagesNumFilter></PagesNumFilter>
        </Col>
        <Col>
        
        </Col>
      </Row>

    </section>
  )
}