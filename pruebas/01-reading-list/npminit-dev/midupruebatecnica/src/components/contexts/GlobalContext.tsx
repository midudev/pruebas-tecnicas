import  { useState, useEffect, createContext, useReducer, Reducer } from "react";
import { Book, Library } from "../../types/books";
import data from '../../files/books'
import { InterestBook } from '../../types/interestbook';
import { ColorMode, GlobalContextType, RlAction } from "../../types/globalcontext";
import * as ls from "local-storage";
import { message } from "antd";

const defValues: GlobalContextType = {
  bookList: [],
  setBookList: (): null => null,
  readList: [],
  dispatchRl: (): null => null,
  resetBookList: (): null => null,
  messageApi: null,
  wWidth: globalThis.innerWidth,
  colorMode: 'dark',
  setColorMode: (): null => null
}

export const getBooksArray = (lib: Library): Book[] => lib.library.map(elem => elem.book)
export const GlobalContext = createContext<GlobalContextType>(defValues)


export default function GlobalContextProvider({ children }: any): JSX.Element {

  const [ wWidth, setWWidth ] = useState<number>(globalThis.innerWidth)
  const [ bookList, setBookList ] = useState<Book[]>(getBooksArray(data));
  const [ colorMode, setColorMode ] = useState<ColorMode>('dark')
  const [ readList, dispatchRl ] = useReducer(RlReducer, [])
  const [ messageApi, contextHolder ] = message.useMessage();

  const resetBookList = () => setBookList(getBooksArray(data));
  
  useEffect(() => {
    if(!ls.get('readList')) dispatchRl({ type: 'set', payload: [] })
    else dispatchRl({type: 'set', payload: ls.get('readList')})
  }, [])

  ls.on('readList', (newvalue: InterestBook[], old: InterestBook[]) => {
    newvalue !== old && dispatchRl({ type: 'set', payload: newvalue })
    console.log('lschange')
  })

  globalThis.onresize = () => setWWidth(globalThis.innerWidth)

  return (
    <GlobalContext.Provider 
      value={{
        bookList,
        setBookList,
        readList,
        dispatchRl,
        resetBookList,
        messageApi,
        wWidth,
        colorMode, 
        setColorMode
      }}>
      { contextHolder }
      { children }
    </GlobalContext.Provider>
  )
}


export const RlReducer: Reducer<InterestBook[], RlAction> = (state: InterestBook[], action: RlAction): InterestBook[] => {
 
  switch(action.type) {
    case 'set': 
      ls.set('readList', action.payload || [])
      return action.payload as InterestBook[] || []

    case 'add': 
      if(!state.some(interest => interest.ISBN === action.payload.ISBN )) {
        ls.set('readList', [...state, action.payload])
        return [...state, action.payload]
      } else return state

    case 'remove': {
      let newState = state.filter(interest => interest.ISBN !== action.payload.ISBN)
      ls.set('readList', newState)
      return newState
    }

    case 'switchReadStatus': {
      let newState: InterestBook[]; 
      newState = state.map(interest => 
          interest.ISBN === action.payload.ISBN ? { ...interest, read: !interest.read } : interest)
        ls.set('readList', newState)
        return newState
    }

    case 'setAllRead': 
    case 'setAllUnread': {
      let status = action.type === 'setAllRead'
      let newState = state.map(interest => { return { ISBN: interest.ISBN, read: status }})
      ls.set('readList', newState)
      return newState
    }

    case 'unreadFirst':
    case 'readFirst': {
      let newState = [...state]
      action.type === 'readFirst' ? 
      newState.sort((a: InterestBook, b: InterestBook) => 
        a.read < b.read ? 1 : a.read > b.read ? -1 : 0) :
      action.type === 'unreadFirst' ? 
      newState.sort((a: InterestBook, b: InterestBook) => 
        a.read < b.read ? -1 : a.read > b.read ? 1 : 0) : null
      ls.set('readList', newState)
      return newState
    }

    case 'clearRead': {
      let newState = state.filter(interest => interest.read !== true)
      ls.set('readList', newState)
      return newState
    }

    default: {
      ls.set('readList', state || [])
      return state || []
    }
  }
}


