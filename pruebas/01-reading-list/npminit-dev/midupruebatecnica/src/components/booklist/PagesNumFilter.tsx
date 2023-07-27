import { Col, InputNumber, Row, Space } from "antd";
import { Dispatch, SetStateAction, useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";
import { Typography } from 'antd'
import '../../styles/booklist/pagesnumfilter.css'
import '../../styles/global-variables.css'
const { Text } = Typography

type props = {
  setPagesRange: Dispatch<SetStateAction<number[]>>
  pagesRange: number[]
}

export default function PagesNumFilter({ setPagesRange, pagesRange }: props): JSX.Element {

  const { colorMode } = useContext(GlobalContext)

  return (
    <div> 
      <Row justify={'space-between'} className={`${colorMode} PagesNum-container`}>
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
              rootClassName={`${colorMode} MinPage-input`}
            ></InputNumber>
            <InputNumber
              onChange={(value) => setPagesRange(range => [range[0], value || 0])}
              min={pagesRange[0] + 1}
              max={2000}
              placeholder="Max"
              rootClassName={`${colorMode} MaxPage-input`}
            ></InputNumber>
          </Space>
        </Col>
      </Row>
    </div>
  );
}