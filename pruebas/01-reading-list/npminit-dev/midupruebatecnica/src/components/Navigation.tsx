import { useContext, useEffect, useState } from "react";
import { SectionSelected } from '../types/navigation';
import { FloatButton, Menu } from "antd";
import BookList from "./booklist/BookList";
import ReadList from "./readlist/ReadList";
import About from "./about/About";
import { MenuItemType, SubMenuType } from "antd/es/menu/hooks/useItems";
import Logo from "./Logo";
import '../styles/navigation.css'
import '../styles/global-variables.css'
import { GlobalContext } from "./contexts/GlobalContext";
import { BarsOutlined, BgColorsOutlined, EllipsisOutlined } from "@ant-design/icons";
import ThemeSwitcher from "./ThemeSwitcher";


export default function Navigation(): JSX.Element {

  const { colorMode, setColorMode, wWidth } = useContext(GlobalContext)
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

  const handleSelect = (e: any) => e.key !== 'theme' && setItemSelected(e.key);
  
  const items: MenuItemType[] = [
    {
      key: 'booklist',
      label: 'Books',
      className: `${colorMode}`,
    },
    {
      key: 'readlist',
      label: 'Read list',
      className: `${colorMode}`,
    },
    {
      key: 'about',
      label: 'About',
      className: `${colorMode}`
    }
  ]

  const itemsWithIcons = items.map(item => { return { ...item, icon: <EllipsisOutlined /> }})

  const itemsMobile: SubMenuType[] = [
    {
      label: 'Menu',
      key: 'MenuMobile',
      icon: <BarsOutlined />,
      children: wWidth > 398 ? itemsWithIcons : [...itemsWithIcons, {
        key: 'theme',
        label: 'Theme',
        icon: <BgColorsOutlined/>,
        onClick: () => setColorMode(color => color === 'dark' ? 'light' : 'dark')
      }],
      style: {left: '-10px'},
      className: `Menu_Mobile_Header ${colorMode}`,
      popupClassName: `Menu_Mobile_Item ${colorMode}`
    }
  ]

  return ( 
    <div>
      <div className="NavbarContainer">
        <Menu 
          items={ wWidth > 473 ? items : itemsMobile }
          mode="horizontal"
          defaultSelectedKeys={['booklist']}
          triggerSubMenuAction={wWidth > 473 ? 'hover' : 'click'}
          onSelect={handleSelect}
          selectedKeys={[itemSelected]}
          className={`${colorMode}`}
          rootClassName={`${colorMode}`}
        >
        </Menu> 
        { wWidth >= 398 ? <ThemeSwitcher></ThemeSwitcher> : <></> }
        <Logo></Logo>
      </div>
      <div className="NavbarBackground"></div>
      <FloatButton.BackTop
        className={`FloatBackTop ${colorMode}`}
        rootClassName={`FloatBackTopRoot ${colorMode}`}
        tooltip={<div className={`FloatBackToolTip ${colorMode}`}>Back to top</div>}
      >
      </FloatButton.BackTop>
      <main id="content" className={`${colorMode}`}>
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