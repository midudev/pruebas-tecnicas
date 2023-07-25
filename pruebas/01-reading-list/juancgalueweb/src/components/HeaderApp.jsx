import { Layout } from 'antd'
import { AntDesignIcon } from './Icons/AntDesignIcon'
import { ReactIcon } from './Icons/ReactIcon'
import { ViteIcon } from './Icons/ViteIcon'
import { ZustandIcon } from './Icons/ZustandIcon'

export const HeaderApp = () => {
  const { Header } = Layout

  return (
    <Header className='header-style'>
      <div className='header-content'>
        <div>📚 Aplicación de lista de libros</div>
        <div className='icons'>
          <ReactIcon />
          <ViteIcon />
          <AntDesignIcon />
          <ZustandIcon />
        </div>
      </div>
    </Header>
  )
}
