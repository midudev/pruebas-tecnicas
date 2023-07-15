import { Card, Row, Divider } from 'antd';
import { Book as Booktype } from '../../types/books'
import { useContext, useRef, useEffect, useState } from 'react';
import Author from './Author';
import Typography from 'antd/es/typography';
import { Image } from 'antd'



type props = {
  bookData: Booktype,
  selectable: boolean
}

export default function Book({ bookData, selectable }: props): JSX.Element {

  const [imgLoaded, setImgLoaded] = useState<boolean>(false)

  return (
    <div> { selectable ? 'selectable' : 'unselectable' } </div>
  )
}
/*
<>
<Card
    style={{
      width: 300,
    }}
  >
    <p>Card content</p>
    <p>Card content</p>
    <p>Card content</p>
  </Card>

<Space direction="vertical" size={16}>
    <Card
      title="Default size card"
      extra={<a href="#">More</a>}
      style={{
        width: 300,
      }}
    >
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>

    <Row gutter={16}>
    <Col span={8}>
      <Card title="Card title" bordered={false}>
        Card content
      </Card>
    </Col>
    <Col span={8}>
      <Card title="Card title" bordered={false}>
        Card content
      </Card>
    </Col>
    <Col span={8}>
      <Card title="Card title" bordered={false}>
        Card content
      </Card>
    </Col>
  </Row>

</>
*/
  