import { Button, Col, Divider, InputNumber, Row, Slider, Space } from "antd";
import { Dispatch, SetStateAction, useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import '../../styles/global-variables.css'

type props = {
  setPagesRange: Dispatch<SetStateAction<number[]>>
  pagesRange: number[]
}

export default function PagesNumFilter({ setPagesRange, pagesRange }: props): JSX.Element {

  return (
    <div> 
      <Row>
        <Col>
          <label>Min pages</label>
          <InputNumber
            onChange={(value) => setPagesRange(range => [value || 0, range[1]])}
            min={1}
            max={1999}
            defaultValue={pagesRange[0]}
            value={pagesRange[0]}
          ></InputNumber>
        </Col>
        <Col>
          <label>Max pages</label>
          <InputNumber
            onChange={(value) => setPagesRange(range => [range[0], value || 0])}
            min={pagesRange[0] + 1}
            max={2000}
            defaultValue={pagesRange[1]}
            value={pagesRange[1]}
          ></InputNumber>
        </Col>
        <Divider type="vertical"></Divider>
      </Row>

    </div>
  );
}