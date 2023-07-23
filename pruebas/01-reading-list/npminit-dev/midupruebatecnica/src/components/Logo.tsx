import { Typography } from "antd"
import { GiBookmarklet, GiBookshelf } from 'react-icons/gi'
import '../styles/logo.css'
const { Text } = Typography 
import '../styles/global-variables.css'

export default function Logo(): JSX.Element {
  return (
    <div id="logo_container">
      <Text id="logo_firstword">Book</Text>
      <div 
        id="logo_icon-container">
        <GiBookmarklet id='logo_icon'/>
      </div>
      <Text 
        id='logo_secondword'
      >Nexus</Text>
    </div>
  )
}