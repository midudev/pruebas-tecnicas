import { FilterByGenre } from "./FilterByGenre"
import { FilterByType } from "./FilterByType"

export const FilterForm = ({filterType, maxPages, pagesValue, genreList, setFilteredByPages, setFilteredByGenre, setPagesValue, books}) => {

  

  const handleFilteredByPages = (e) => {
    if (books) {
      if (e.target.value === "") {
        setFilteredByPages(books);
      } else {
        setPagesValue(parseInt(e.target.value))
        const filteredBooks = books.filter((book) => book.book.pages < pagesValue);
        setFilteredByPages(filteredBooks);
      }
    }
  };

  const handleFilteredByGenre = (e) =>{
    if(books){
      if(e.target.value === "all"){
        setFilteredByGenre(books)
      }else{
        const selectedGenre = e.target.value;
        const filteredBooks = books.filter((book) => book.book.genre === selectedGenre);
        setFilteredByGenre(filteredBooks);
      }
    }
  }

  return (
    <form >
          {filterType === "filterbypages" && 
          <FilterByType handleFilteredByPages={handleFilteredByPages} maxPages={maxPages} pagesValue={pagesValue}/>
          }
          {filterType === "filterbygenre" &&
          <FilterByGenre genreList={genreList} handleFilteredByGenre={handleFilteredByGenre}/>
          }
        </form>
  )
}
