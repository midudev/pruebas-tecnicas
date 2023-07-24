import { useContext, useEffect, useState } from "react";
import { SectionSelected } from '../types/navigation';
import { Menu } from "antd";
import BookList from "./booklist/BookList";
import ReadList from "./readlist/ReadList";
import About from "./about/About";
import { MenuItemType, SubMenuType } from "antd/es/menu/hooks/useItems";
import Logo from "./Logo";
import '../styles/navigation.css'
import '../styles/global-variables.css'
import { GlobalContext } from "../contexts/GlobalContext";
import { BarsOutlined, CaretRightOutlined } from "@ant-design/icons";
import ThemeSwitcher from "./ThemeSwitcher";


export default function Navigation(): JSX.Element {

  const { colorMode, wWidth } = useContext(GlobalContext)
  const [ itemSelected, setItemSelected ] = useState<SectionSelected>('booklist');

  useEffect(() => {
    switch(itemSelected) {
      case 'booklist':
        document.title = 'BookNexus - Books'
        break;
      case 'readlist':
        document.title = 'BookNexus - Read List'
        break;
      case 'about':
        document.title = 'BookNexus - About'
        break;
      default: document.title = 'BookNexus'
    }
  }, [itemSelected])

  const handleSelect = (e: any) => setItemSelected(e.key);
  
  
  const items: MenuItemType[] = [
    {
      key: 'booklist',
      label: 'Books'
    },
    {
      key: 'readlist',
      label: 'Read list',
    },
    {
      key: 'about',
      label: 'About',
    }
  ]

  const itemsMobile: SubMenuType[] = [
    {
      label: 'Menu',
      key: 'MenuMobile',
      icon: <BarsOutlined />,
      children: items.map(item => { return { ...item, icon: <CaretRightOutlined /> }}),
      style: {left: '-10px'},
      className: 'Menu_Mobile_Header'
    }
  ]

  return ( 
    <div>
      <Menu 
        items={ wWidth > 473 ? items : itemsMobile }
        mode="horizontal"
        defaultSelectedKeys={['booklist']}
        triggerSubMenuAction={wWidth > 473 ? 'hover' : 'click'}
        onSelect={handleSelect}
        selectedKeys={[itemSelected]}
      >
      </Menu> 
      <Logo></Logo>
      <ThemeSwitcher></ThemeSwitcher>
      <main id="content">
      { 
        itemSelected === 'booklist' 
        ? <BookList setItemSelected={setItemSelected}></BookList> : 
        itemSelected === 'readlist'
        ? <ReadList setItemSelected={setItemSelected}></ReadList> : 
        itemSelected === 'about'
        ? <About></About> : <></>
      }
      </main>
    </div>
  )
}