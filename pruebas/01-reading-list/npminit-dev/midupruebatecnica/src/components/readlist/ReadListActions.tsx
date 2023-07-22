import { useContext, useState } from "react"
import { GlobalContext } from "../../contexts/GlobalContext"
import { Button, Col, Dropdown, MenuProps, Modal, Popover, Row, Segmented, Space } from "antd"
import { Typography } from "antd"
import { DeleteOutlined, ReadFilled, RightOutlined, WarningOutlined } from "@ant-design/icons"
import { MdPending } from 'react-icons/md'
import { IoMdCheckmarkCircle } from 'react-icons/io'
import { GlobalContextType } from "../../types/globalcontext"

const { Text } = Typography

export default function ReadListActions(): JSX.Element {
  
  const { readList, dispatchRl, messageApi } = useContext<GlobalContextType>(GlobalContext)
  const [ clearReadsModal, setclearReadsModal ] = useState<boolean>(false)
  const [ clearAllModal, setclearAllModal ] = useState<boolean>(false)

  const actionItems = [
    {
      label: 'Set all as read',
      key: '1',
      icon: <IoMdCheckmarkCircle />,
      disabled: !readList?.some(interest => !interest.read)
    },
    {
      label: 'Set all as unread',
      key: '2',
      disabled: !readList?.some(interest => interest.read),
      icon: <ReadFilled />,
    },
    { 
      label: 'Clear reads',
      key: '3',
      danger: true,
      disabled: !readList?.some(interest => interest.read),
      icon: <DeleteOutlined />,
    },
    {
      label: 'Clear read list',
      key: '4',
      danger: true,
      icon: <DeleteOutlined />,
    },
  ]


  const itemProps: MenuProps = {
    items: actionItems,
    onClick: (info: any) => {
      switch(info.key) {
        case '1': dispatchRl({ type: 'setAllRead' })
        break;
        case '2': dispatchRl({ type: 'setAllUnread' })
        break;
        case '3': setclearReadsModal(true)
        break;
        case '4': setclearAllModal(true)
      }
    } 
  }

  const handleOk_clearAll = () => {
    dispatchRl({ type: 'set', payload: [] })
    setclearAllModal(false)
    messageApi?.info({ 
      content: 'The reading list has been cleared',
      duration: 2
     })
  }

  const handleOk_clearReads = () => {
    dispatchRl({ type: 'clearRead' })
    setclearReadsModal(false)
    messageApi?.info({ 
      content: 'Read books cleared',
      duration: 2
     })
  }

  return (
    <div>
      <Dropdown.Button 
        disabled={readList?.length ? false : true}
        type="default"
        trigger={['click']}
        menu={itemProps}
      >
        Actions
      </Dropdown.Button>
      <Modal
        title='Deleting the reading list...'
        okText='Confirm'
        open={clearAllModal}
        onOk={ handleOk_clearAll }
        onCancel={() => setclearAllModal(false)}
      >
        Are you sure to empty the reading list? This action cannot be undone.
      </Modal>
      <Modal
        title='Deleting read books...'
        okText='Confirm'
        open={clearReadsModal}
        onOk={ handleOk_clearReads }
        onCancel={() => setclearReadsModal(false)}
      >
        You will clear read books. This action cannot be undone.
      </Modal>
    </div>
  )
}