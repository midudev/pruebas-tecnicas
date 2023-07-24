import { Col, Divider, Row, Space } from "antd";
import ReadListActions from "./ReadListActions";
import ReadListSorting from './ReadListSorting';
import '../../styles/readlist/readlist.css'
import '../../styles/global-variables.css'
import InterestList from "./InterestList";
import { Dispatch, SetStateAction } from 'react';
import { SectionSelected } from '../../types/navigation';

type props = {
  setItemSelected: Dispatch<SetStateAction<SectionSelected>>
}

export default function ReadList({ setItemSelected }: props): JSX.Element {

  return (
    <section id='RL-container'>
      <Row justify={'space-around'} align={'middle'}>
        <Col span={12}>
          <ReadListSorting></ReadListSorting>
        </Col>
        <Col span={12}>
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