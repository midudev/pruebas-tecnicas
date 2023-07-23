import { useEffect, useState } from "react";
import { SectionSelected } from '../types/navigation';
import { Menu } from "antd";
import BookList from "./booklist/BookList";
import ReadList from "./readlist/ReadList";
import About from "./about/About";
import { MenuItemType } from "antd/es/menu/hooks/useItems";
import Logo from "./Logo";
import '../styles/navigation.css'
import '../styles/global-variables.css'


export default function Navigation(): JSX.Element {

  const [ itemSelected, setItemSelected ] = useState<number>(1);

  useEffect(() => {
    switch(itemSelected) {
      case 1:
        document.title = 'BookNexus - Books'
        break;
      case 2:
        document.title = 'BookNexus - Read List'
        break;
      case 3:
        document.title = 'BookNexus - About'
        break;
      default: document.title = 'BookNexus'
    }
  }, [itemSelected])

  const onClick = (e: any) => {
    setItemSelected(parseInt(e.key));
  }
  
  const items: MenuItemType[] = [
    {
      key: '1',
      label: 'Books',
    },
    {
      key: '2',
      label: 'Read list',
    },
    {
      key: '3',
      label: 'About',
    }
  ]

  return ( 
    <div>
      <Menu 
        items={items}
        mode="horizontal"
        defaultSelectedKeys={['1']}
        onClick={onClick}
      >
      </Menu> 
      <Logo></Logo>
      <main id="content">
      { 
        itemSelected == 1 
        ? <BookList setItemSelected={setItemSelected}></BookList> : 
        itemSelected == 2
        ? <ReadList></ReadList> : 
        itemSelected == 3
        ? <About></About> : <></>
      }
      </main>
    </div>
  )
}