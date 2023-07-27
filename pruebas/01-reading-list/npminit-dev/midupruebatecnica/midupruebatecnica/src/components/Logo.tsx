import { Typography } from "antd"
import { GiBookmarklet } from 'react-icons/gi'
import '../styles/logo.css'
const { Text } = Typography 
import '../styles/global-variables.css'
import { GlobalContext } from "./contexts/GlobalContext"
import { useContext } from "react"

export default function Logo(): JSX.Element {
  
  const { colorMode } = useContext(GlobalContext)

  return (
    <div id="logo_container" className={`${colorMode}`}>
      <Text id="logo_firstword" className={`${colorMode}`}>Book</Text>
      <div 
        id="logo_icon-container" className={`${colorMode}`}>
        <GiBookmarklet id='logo_icon' className={`${colorMode}`}/>
      </div>
      <Text 
        id='logo_secondword' className={`${colorMode}`}
      >Nexus</Text>
    </div>
  )
}