import { useState, useEffect, useContext } from 'react'
import BookList from './components/BookList'
import styles from "./styles/app.module.css"
import Header from './components/Header'
import useBooks from './Hooks/useBooks'
import { BooksAvailable } from './context/contextBooks'
import ReadList from './components/ReadList'
import useFilter from './Hooks/useFilter'


function App() {

  const [books] = useBooks()
  const [call, setCall]= useState(true)
  const [store,dispatch] = useContext(BooksAvailable);
  const {listBooks, listRead} = store;

  const localMemory = localStorage.getItem("books");

  useEffect(()=>{


   window.addEventListener('storage',event =>{
    const newStateLocal = JSON.parse(event.newValue)
      if(event.key === "books"){

        if(JSON.parse(event.newValue).listBooks.length !== listBooks.length){
          dispatch({type:"syncTabs", book:newStateLocal})
          
         }
      } 
    })
   
  },[localMemory])


  useEffect(()=>{
    if(localStorage.getItem("books") == undefined){
      if(books.length > 0 && call){
        dispatch({type:"init", books:books })
        setCall(false)
      } else if(!call){
        return
      }
  }

},[books])






  return (
    <>
    <Header/>
    <main className={styles.main}>
    <BookList/>
    {listRead.length > 0 && <ReadList/>}
    </main>
    </>
  )
}

export default App
