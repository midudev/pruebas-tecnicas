import { useState } from 'react'

import './App.css'
import SidebarContainer from './components/layout/sidebar/SidebarContainer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SidebarContainer/>

    </>
  )
}

export default App
