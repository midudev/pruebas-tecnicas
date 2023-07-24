import { Layout } from 'antd'
import { Books } from './components/Books'
import { HeaderApp } from './components/HeaderApp'
import { ReadingList } from './components/ReadingList'

function App() {
  const { Footer, Sider, Content } = Layout

  const footerStyle = {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#7dbcea'
  }
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <HeaderApp />
      <Layout hasSider>
        <Content>
          <Books />
        </Content>
        <Sider width={600}>
          <ReadingList />
        </Sider>
      </Layout>
      <Footer style={footerStyle}>Footer</Footer>
    </Layout>
  )
}

export default App
