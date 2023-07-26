import { useUserContext } from "../context/userContext"

export default function BookList({ filteredBooks }) {
  const { userList, addBook } = useUserContext()

  function handleClickAddToList(item) {
    addBook(item)
  }
  return (
    <section>
      <ul className="booklist-container">
        {filteredBooks?.map((item) => {
          const isItemInUserList = userList.some((bk) => bk.ISBN === item.ISBN)
          if (isItemInUserList) {
            return null
          } else {
            return (
              <li key={item.ISBN} onClick={() => handleClickAddToList(item)}>
                <img src={item.cover} alt={`${item.title} cover`} />
              </li>
            )
          }
        })}
      </ul>
    </section>
  )
}
