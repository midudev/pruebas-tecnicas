import useBooks from './useBooks.jsx'

const useInitState=()=>{
  const  {booksHome }= useBooks()
const carState = JSON.parse(window.localStorage.getItem('car')) || []
const purchasedState = JSON.parse(window.localStorage.getItem('purchased')) || []
const homeState = JSON.parse(window.localStorage.getItem('home')) || booksHome
const pagesInitState={car:[...carState],purchased:[...purchasedState],home:[...homeState]};
return {pagesInitState}
}
export default useInitState