import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import { Book } from "../../types/books";
import { Col, Row, Image, Button, Space, Switch, Popconfirm } from "antd";
import booksdata from '../../files/books'
import { getBooksArray } from "../../contexts/GlobalContext";
import { MdPending } from 'react-icons/md'
import { IoMdCheckmarkCircle } from 'react-icons/io'
import { AiFillDelete } from 'react-icons/ai'
import { CheckCircleFilled, CheckCircleOutlined, CloseCircleFilled, CreditCardFilled, DeleteFilled, ReadFilled } from "@ant-design/icons";
import { Typography } from 'antd'
const { Text } = Typography

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
      <Row align={'middle'} justify={'space-between'}>
        <Col span={2}>
          <Image 
            src={ data?.cover }
            preview={true}
          ></Image>
        </Col>
        <Col span={8}>
          <span> { data?.title } </span>
        </Col>
        <Col span={8}>
        <span> { data?.author.name } </span>
        </Col>
        <Col span={6}>
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

