export interface PropsUI {
    modalStateFav?: boolean;
    setModalStateFav: React.Dispatch<React.SetStateAction<boolean>>;
    searchWord?:filter|undefined
  }
interface filter{
  wordSearch:string
  setWordSearch : React.Dispatch<React.SetStateAction<string>>
}