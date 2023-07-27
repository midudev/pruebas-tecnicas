import { Col, Divider, List, Row } from "antd";
import Typography from "antd/es/typography";
import '../../styles/booklist/bookdetails.css'
import '../../styles/global-variables.css'
import { GlobalContext } from "../contexts/GlobalContext";
import { useContext } from "react";
const { Text } = Typography

type props = {
  author: string
  year: number,
  pages: number, 
  ISBN: string,
  otherBooks: string[]
}

export default function BookDetails(props: props): JSX.Element {

  const { colorMode } = useContext(GlobalContext)

  return (
    <List
      style={{minWidth: '200px'}}
      dataSource={ Object.entries(props).slice(1, 3) }
      className={`BookDetsList ${colorMode}`}
      rootClassName={`BookDetsListRoot ${colorMode}`}
      renderItem={(item, i) => {
        return (
          <div>
            <Row justify={'space-between'}>
              <Col span={8}> 
                <Text className={`BookDetsPropName ${colorMode}`}>
                  { item[0][0].toUpperCase() + item[0].slice(1) }
                </Text> 
              </Col>
              <Col span={16}> 
                <Text className={`BookDetsPropValue ${colorMode}`} type='secondary' style={{float: 'right'}}>{ item[1] }</Text> 
              </Col>
            </Row>
            <Divider style={{margin: '2px 0'}}></Divider>
          </div>
        )
      }}>
      <Row justify={'space-between'} align={'middle'}>
        <Col span={12}>
          <Text className={`BookDetsPropName ${colorMode}`}>More from { props.author }</Text>
        </Col>
        <Col span={12}>
        { props.otherBooks.map((elem, i) => 
          <span key={i}>
            <Text className={`BookDetsPropValue ${colorMode}`} type="secondary"> { `- ${elem}` }</Text>
            <br></br>
          </span>
        ) }
        </Col>
      </Row>
    </List>
  )
}