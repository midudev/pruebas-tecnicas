import { Card, Row, Col, Dropdown, Popover, Button, message, MessageArgsProps } from 'antd';
import { Book as Booktype } from '../../types/books'
import { useContext, useRef, useEffect, useState, SetStateAction, Dispatch, Key } from 'react';
import Typography from 'antd/es/typography';
import { Image } from 'antd'
import BookDetails from './BookDetails';
import { GlobalContext } from '../../contexts/GlobalContext';
import { SectionSelected } from '../../types/navigation';
import '../../styles/global-variables.css'
import '../../styles/booklist/book.css'
import { ColorMode } from '../../types/globalcontext';


const { Text } = Typography

type props = {
  bookData: Booktype,
  selectable: boolean,
  setItemSelected: Dispatch<SetStateAction<SectionSelected>>,
}

export default function Book({ bookData, selectable = false, setItemSelected }: props): JSX.Element {

  const { dispatchRl, messageApi, colorMode } = useContext(GlobalContext)


  const addToReadList = (ISBN: string) => {
    try {
      dispatchRl({ type: 'add', payload: {ISBN, read: false} })
      messageApi?.open({
        type: 'success', 
        content: `"${bookData.title}" added succesfully`, 
        duration: 2, 
        onClick: () => setItemSelected('readlist'),
        style: {cursor: 'pointer'}
      })
    } catch(error) {
      messageApi?.open({ type: 'error', content: 'Something went wrong!'})
      console.log(error)
    }
  }    

  return (

    <Card 
      title={bookData.title}
      hoverable={true}
      className={`Card-container ${colorMode}`}
      rootClassName={`Card-container-root ${colorMode}`}
      size='small'
      headStyle={{ borderBottom: '3px solid white', color: colorMode === 'dark' ? '#d7e3ff' : '#333333' }}
      cover={
        <Image 
          src={bookData.cover}
          fallback='data:image/png;base64,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'  
          alt={`${bookData.title} \n ${bookData.author.name}`} 
          className={`Card-image-main ${colorMode}`}
          rootClassName={`Card-image-root ${colorMode}`}
          wrapperClassName={`Card-image-wrap ${colorMode}`}
      ></Image>  
      }
    >
      <Row justify={'space-between'} style={{marginTop: '10px'}}>
        <Col span={14}>
          <Text className={`Card-author ${colorMode}`}>{bookData.author.name}</Text>
        </Col>
        <Col span={10}>
          <Text 
            type='secondary' italic
            className={`Card-gender ${colorMode}`}
          >{bookData.genre}</Text>
        </Col>
      </Row>
      <Row justify={'center'}>
        <Col span={16}>
          <Dropdown 
            menu={{items: [{ type: 'group', label: bookData.synopsis }]}}
            overlayStyle={{maxWidth: '50vw'}}
            trigger={['hover']}
            autoAdjustOverflow={true}
            className={`Card-synopsis-main ${colorMode}`}
            openClassName={`Card-synopsis-open ${colorMode}`}
            rootClassName={`Card-synopsis-root ${colorMode}`}
          >
          <a onClick={e => e.preventDefault()}>Synopsis</a>
          </Dropdown>
        </Col>
      </Row>
      <Row justify={'space-between'}>
        <Col>
          <Popover 
            placement='bottomLeft' 
            trigger='click'
            content={(
              <BookDetails
                author={bookData.author.name}
                year={bookData.year}
                pages={bookData.pages}
                ISBN={bookData.ISBN}
                otherBooks={bookData.author.otherBooks}
             ></BookDetails>
            )}  
            className={`Card-details-main ${colorMode}`}
            openClassName={`Card-details-open ${colorMode}`}
            rootClassName={`Card-details-root ${colorMode}`}
          >
            <Button>Info</Button>
          </Popover>
        </Col>
        <Col> 
          <Button 
            onClick={() => addToReadList(bookData.ISBN)}
            type='primary' 
            disabled={selectable ? false : true}
            className={`Card-add-button ${colorMode}`}> 
            Add
          </Button>
        </Col>
      </Row>
    </Card> 
  )
}

  