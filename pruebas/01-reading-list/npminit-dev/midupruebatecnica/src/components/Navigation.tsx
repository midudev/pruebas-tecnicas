import React, { useState, useEffect, useContext } from "react";
import { SectionSelected } from '../types/navigation';
import { Button, Col, Divider, Row } from "antd";
import Logo from "./Logo";
import { Content } from "antd/es/layout/layout";
import BookList from "./booklist/BookList";
import About from "./about/About";
import { GlobalContext } from "../contexts/GlobalContext";

export default function Navigation(): JSX.Element {

  const [ sectionSelect, setSectionSelect ] = useState<SectionSelected>('booklist');
  const { setShowReadList } = useContext(GlobalContext)

  return ( <>
    <nav id="nav_container">
      <Row justify={'space-between'} align={"middle"}>
        <Col span={14}>
          <Logo></Logo>
        </Col>
        <Col span={10}>
          <Row justify={'space-evenly'}>
            <Col span={6}>
              <Button type='link' 
                onClick={() => setSectionSelect('booklist')}
              >Book list</Button>
            </Col>
            <Col span={6}>
              <Button type='link' 
                onClick={() => setShowReadList(true)}
              >Read list</Button>
            </Col>
            <Col span={6}>
              <Button type='link' 
                onClick={() => setSectionSelect('about')}
              >About</Button>
            </Col>
          </Row> 
        </Col>
      </Row>  
    </nav>
    <Content id="content_container">
      { 
        sectionSelect === 'booklist' ?
        <BookList></BookList>
        : <About></About>
      }
    </Content>
  </> )
}