import { useUserContext } from "../context/userContext"
import Close from "@mui/icons-material/Close"

export default function UserList() {
  const { userList, removeBook } = useUserContext()

  function handleClickRemoveFromList(item) {
    removeBook(item)
  }

  return (
    <section className="readingList-container">
      {userList?.length > 0 ? (
        <>
          <h2>Your list</h2>
          <ul>
            {userList.map((item) => (
              <li key={item.title}>
                <span className="close-btn" onClick={() => handleClickRemoveFromList(item)}>
                  <Close fontSize="small" />
                </span>
                <img src={item.cover} alt={`${item.title} cover`} />
              </li>
            ))}
          </ul>
        </>
      ) : (
        <h2>Your list is Empty</h2>
      )}
    </section>
  )
}
