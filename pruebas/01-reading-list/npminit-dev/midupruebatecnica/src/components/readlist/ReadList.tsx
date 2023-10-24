import { Col, Row } from "antd";
import { useContext, useEffect, useRef } from 'react';
import ReadListActions from "./ReadListActions";
import ReadListSorting from './ReadListSorting';
import '../../styles/readlist/readlist.css'
import '../../styles/global-variables.css'
import InterestList from "./InterestList";
import { Dispatch, SetStateAction } from 'react';
import { SectionSelected } from '../../types/navigation';
import { GlobalContext } from "../contexts/GlobalContext";


type props = {
  setItemSelected: Dispatch<SetStateAction<SectionSelected>>,
}

export default function ReadList({ setItemSelected }: props): JSX.Element {

  const { wWidth } = useContext(GlobalContext)

  return (
    <section id='RL-container'>
      <Row justify={'space-around'} align={'middle'}>
        <Col span={wWidth <= 310 ? 24 : 12}>
          <ReadListSorting></ReadListSorting>
        </Col>
        <Col span={wWidth <= 310 ? 24 : 12}>
          <ReadListActions></ReadListActions>
        </Col>
      </Row>
      <Row justify={'center'}>
        <Col span={24}>
          <InterestList setItemSelected={setItemSelected}></InterestList>
        </Col>
      </Row>
    </section>
  );
}

