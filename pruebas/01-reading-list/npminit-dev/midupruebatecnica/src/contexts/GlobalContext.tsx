import React, { useState, useEffect, createContext, useReducer, Reducer, Dispatch } from "react";
import { Book, Library } from "../types/books.tsx";
import data from '../files/books.tsx'
import { InterestBook } from "../types/interestbook.tsx";
import { GlobalContextType } from "../types/globalcontext.tsx";
import * as ls from "local-storage";
import { message } from "antd";

const defValues: GlobalContextType = {
  bookList: [],
  setBookList: (): null => null,
  readList: [],
  dispatchRl: (): null => null,
  resetBookList: (): null => null,
  messageApi: null
}

export const getBooksArray = (lib: Library): Book[] => lib.library.map(elem => elem.book)
export const GlobalContext = createContext<GlobalContextType>(defValues)


export default function GlobalContextProvider({ children }: any): JSX.Element {

  const [ bookList, setBookList ] = useState<Book[]>(getBooksArray(data));
  const [ readList, dispatchRl ] = useReducer(RlReducer, [])
  const [ messageApi, contextHolder ] = message.useMessage();

  const resetBookList = () => setBookList(getBooksArray(data));
  
  useEffect(() => {
    if(!ls.get('readList')) dispatchRl({ type: 'set', payload: [] })
    else dispatchRl({type: 'set', payload: ls.get('readList')})
  }, [])

  ls.on('readList', (newvalue: InterestBook[], old: InterestBook[]) => {
    newvalue !== old && dispatchRl({ type: 'set', payload: newvalue })
  })

  return (
    <GlobalContext.Provider value={{
        bookList,
        setBookList,
        readList,
        dispatchRl,
        resetBookList,
        messageApi
      }}>
      { contextHolder }
      { children }
    </GlobalContext.Provider>
  )
}

const RlReducer: Reducer<InterestBook[], RlAction> = (state: InterestBook[], action: RlAction): InterestBook[] => {
  switch(action.type) {
    case 'set': 
      ls.set('readList', action.payload)
      return action.payload

    case 'add': 
      if(!state.some(interest => interest.ISBN === action.payload.ISBN )) {
        ls.set('readList', [...state, action.payload])
        return [...state, action.payload]
      }

    case 'remove': {
      let newState = state.filter(interest => interest.ISBN !== action.payload.ISBN )
      ls.set('readList', newState)
      return newState
    }

    case 'switchReadStatus': {
      let newState = state.map(interest => 
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
      newState = state.toSorted((a, b) => a.read < b.read ? 1 : a.read > b.read ? -1 : 0) :
      newState = state.toSorted((a, b) => a.read < b.read ? -1 : a.read > b.read ? 1 : 0)
      ls.set('readList', newState)
      return newState
    }

    case 'clearRead': {
      let newState = state.filter(interest => interest.read !== true)
      ls.set('readList', newState)
      return newState
    }

    default: {
      ls.set('readList', state)
      return state
    }
  }
}

interface RlAction {
  type: string,
  payload: any
}
