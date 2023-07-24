import { Button, Col, Divider, InputNumber, Row, Slider, Space } from "antd";
import { Dispatch, SetStateAction, useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import { Typography } from 'antd'
import '../../styles/global-variables.css'
const { Text } = Typography

type props = {
  setPagesRange: Dispatch<SetStateAction<number[]>>
  pagesRange: number[]
}

export default function PagesNumFilter({ setPagesRange, pagesRange }: props): JSX.Element {

  return (
    <div> 
      <Row justify={'space-between'}>
        <Col span={6}>
          <Text>Pages</Text>
        </Col>
        <Col span={14}>
          <Space>
            <InputNumber
              onChange={(value) => setPagesRange(range => [value || 0, range[1]])}
              min={1}
              max={1999}
              placeholder="Min"
            ></InputNumber>
            <InputNumber
              onChange={(value) => setPagesRange(range => [range[0], value || 0])}
              min={pagesRange[0] + 1}
              max={2000}
              placeholder="Max"
            ></InputNumber>
          </Space>
        </Col>
      </Row>
    </div>
  );
}