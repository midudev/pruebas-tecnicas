import { useState } from "react";
import { SectionSelected } from '../types/navigation';
import { Menu } from "antd";
import BookList from "./booklist/BookList";
import ReadList from "./readlist/ReadList";
import About from "./about/About";
import { MenuItemType } from "antd/es/menu/hooks/useItems";


export default function Navigation(): JSX.Element {

  const [ itemSelected, setItemSelected ] = useState(1);

  const onClick = (e: any) => {
    console.log(e.key)
    setItemSelected(e.key);
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
      <main>
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