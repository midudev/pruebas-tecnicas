import { Layout } from 'antd'
import { Books } from './components/Books'
import { HeaderApp } from './components/HeaderApp'

function App() {
  const { Footer, Content } = Layout

  const footerStyle = {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#7dbcea'
  }
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <HeaderApp />
      <Content>
        <Books />
      </Content>
      <Footer style={footerStyle}>Footer</Footer>
    </Layout>
  )
}

export default App
