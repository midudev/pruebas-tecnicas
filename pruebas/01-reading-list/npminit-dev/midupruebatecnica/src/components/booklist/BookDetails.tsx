import { Col, Divider, Dropdown, List, Row, Space } from "antd";
import Typography from "antd/es/typography";
import { Book } from "../../types/books";
import { useEffect, useState } from "react";

const { Text } = Typography

type props = {
  author: string
  year: number,
  pages: number, 
  ISBN: string,
  otherBooks: string[]
}

export default function BookDetails(props: props): JSX.Element {

  return (
    <List
      style={{minWidth: '200px'}}
      dataSource={ Object.entries(props).slice(0, 3) }
      renderItem={(item, i) => {
        return (
          <div>
            <Row justify={'space-between'}>
              <Col span={8}> 
                <Text>{ item[0] }</Text> 
              </Col>
              <Col span={16}> 
                <Text type='secondary' style={{float: 'right'}}>{ item[1] }</Text> 
              </Col>
            </Row>
            <Divider style={{margin: '2px 0'}}></Divider>
          </div>
        )
      }}>
      <Row justify={'space-between'} align={'middle'}>
        <Col span={12}>
          <Text>More from { props.author }</Text>
        </Col>
        <Col span={12}>
        { props.otherBooks.map((elem, i) => 
          <span key={i}>
            <Text type="secondary"> { `> ${elem}` }</Text>
            <br></br>
          </span>
        ) }
        </Col>
      </Row>
    </List>
  )
}