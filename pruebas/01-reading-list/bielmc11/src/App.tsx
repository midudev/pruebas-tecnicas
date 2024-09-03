/* eslint-disable @typescript-eslint/no-floating-promises */
import './App.css'
import { Header } from './components/Header'
import { MainSectionChoise } from './components/MainSectionChoise'

function App () {

  return (

      <div className='app_wrapper flex flex-col scroll-smooth'>
        <Header />
        <MainSectionChoise />
      </div>

  )
}

export default App
