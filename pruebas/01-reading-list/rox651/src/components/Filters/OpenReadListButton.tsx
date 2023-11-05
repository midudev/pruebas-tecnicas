import { useLibraryStore } from '../../store'

const OpenReadListButton = () => {
  const { setIsOpenReadList } = useLibraryStore()

  const openReadList = () => {
    setIsOpenReadList(true)
  }

  return (
    <button className=" bg-blue-500 text-white px-4 py-1  transition-colors rounded-md" onClick={openReadList}>
      Open readlist
    </button>
  )
}

export default OpenReadListButton
