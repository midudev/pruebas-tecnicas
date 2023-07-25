import { Layout } from 'antd'
import { Books } from './components/Books'
import { FooterApp } from './components/FooterApp'
import { HeaderApp } from './components/HeaderApp'

function App() {
  const { Footer, Content } = Layout

  return (
    <Layout className='layout-app'>
      <HeaderApp />
      <Content>
        <Books />
      </Content>
      <Footer className='footer-app'>
        <FooterApp />
      </Footer>
    </Layout>
  )
}

export default App
