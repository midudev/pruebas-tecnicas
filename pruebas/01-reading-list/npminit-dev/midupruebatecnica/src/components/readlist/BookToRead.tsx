import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import { Book } from "../../types/books";
import { Col, Row, Image, Button, Space, Switch, Popconfirm } from "antd";
import booksdata from '../../files/books'
import { getBooksArray } from "../../contexts/GlobalContext";
import { CheckCircleFilled, DeleteFilled, ReadFilled } from "@ant-design/icons";
import { Typography } from 'antd'
const { Text } = Typography
import '../../styles/global-variables.css'
import '../../styles/readlist/booktoread.css'

interface props {
  ISBN: string, 
  read: boolean
}

export default function BookToRead({ ISBN, read }: props): JSX.Element {

  const { dispatchRl } = useContext(GlobalContext)
  const [ data, setData ] = useState<Book>()

  useEffect(() => {
    setData(getBooksArray(booksdata).find(book => book.ISBN === ISBN))
  }, [ISBN, read])

  return (
    <div>
      <Row className={`BookToRead-container ${read ? 'BookToRead-read' : 'BookToRead-pending'}`}
        align={'middle'} 
        justify={'space-between'}
        style={{ margin: '5px 0' }}>
        <Col span={2}>
          <Image 
            src={ data?.cover }
            preview={true}
            width='50px'
            height='50px'
            style={{ borderRadius: '50%', justifySelf: 'center'}}
          ></Image>
        </Col>
        <Col span={7}>
          <Text strong> { data?.title } </Text>
        </Col>
        <Col span={6}>
          <Text type="secondary" italic> { data?.author.name } </Text>
        </Col>
        <Col span={2}>
          <Text type='secondary'> { data?.year } </Text>
        </Col>
        <Col span={4}>
          <Text type='secondary'> { data?.genre } </Text>
        </Col>
        <Col span={3}>
          <Row align={'middle'} justify={'center'}>
            <Space direction="horizontal">
              <Col span={10}>
                <Switch 
                  style={{ backgroundColor: !read ? 'teal' : 'green' }}
                  checkedChildren={<ReadFilled/>}
                  unCheckedChildren={<CheckCircleFilled/>}
                  defaultChecked={!read}
                  checked={!read}
                  title="status"
                  onChange={() => 
                    dispatchRl({ 
                      type: 'switchReadStatus', 
                      payload: { ISBN } 
                    })
                  }
                />
              </Col>
              <Col span={10}>
              <Popconfirm
                title="Removing book"
                description="Are you sure to delete this book?"
                onConfirm={() => 
                  dispatchRl({ type: 'remove', payload: { ISBN } })
                }
                okText="Yes"
                cancelText="No"
              >
                <Button 
                  style={{ backgroundColor: 'maroon' }} 
                  type="primary"
                  size="small"
                >
                  <DeleteFilled />
               </Button>
              </Popconfirm>
              </Col>
            </Space>
          </Row>
        </Col>
      </Row>
    </div>
  )
}

