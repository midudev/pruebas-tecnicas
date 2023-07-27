import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../contexts/GlobalContext";
import { Book } from "../../types/books";
import { Col, Row, Image, Button, Space, Switch, Popconfirm } from "antd";
import booksdata from '../../files/books'
import { getBooksArray } from "../contexts/GlobalContext";
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

  const { dispatchRl, colorMode, wWidth } = useContext(GlobalContext)
  const [ bookData, setbookData ] = useState<Book>()

  useEffect(() => {
    setbookData(getBooksArray(booksdata).find(book => book.ISBN === ISBN))
  }, [ISBN, read])

  return (
    <div>
      <Row className={`BookToRead-container ${colorMode} ${read ? 'BookToRead-read' : 'BookToRead-pending'}`}
        align={'middle'} 
        justify={'space-between'}>
        <Col span={2}>
          <Image 
            className="Btr_Image"
            src={ bookData?.cover }
            preview={true}
            width='50px'
            height='50px'
          ></Image>
        </Col>
        <Col span={wWidth >= 718 ? 7 : 10}>
          <Text strong style={{ marginLeft: wWidth <= 705 ? '10px' : 'left' }}> { bookData?.title } </Text>
        </Col>
        <Col span={wWidth <= 544 ? 0 : 7}>
          <Text type="secondary" italic> { bookData?.author.name } </Text>
        </Col>
        <Col span={ wWidth < 718 ? 0 : 5}>
          <Text type='secondary'> { bookData?.genre } </Text>
        </Col>
        <Col span={wWidth >= 718 ? 3 : 5 }>
          <Row align={'middle'} justify={'center'}>
            <Space direction="horizontal">
              <Col span={10}>
                <Switch 
                  style={{ backgroundColor: !read ? '#138585' : '#3c8618' }}
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

