import { useUserContext } from "../context/userContext"
import Close from "@mui/icons-material/Close"
import MinimizeIcon from "@mui/icons-material/Minimize"
import OpenInFullIcon from "@mui/icons-material/OpenInFull"
import { useState } from "react"

export default function UserList({ minimizeList, setMinimizeList }) {
  const { userList, removeBook, availableBooks } = useUserContext()

  function handleClickRemoveFromList(item) {
    removeBook(item)
  }

  return (
    <section className="readingList-container">
      <div className="readingList-header">
        <div className="readingList-title">
          {availableBooks > 1 && <h2> {availableBooks} Books Available</h2>}
          {availableBooks === 1 && <h2>1 Book Available</h2>}
          {availableBooks === 0 && <h2>No books left</h2>}

          {userList?.length > 0 && (
            <span className="readingList-header-btns">
              {minimizeList ? (
                <OpenInFullIcon onClick={() => setMinimizeList(false)} />
              ) : (
                <MinimizeIcon onClick={() => setMinimizeList(true)} />
              )}
            </span>
          )}
        </div>

        <p>{userList?.length} in your list</p>
      </div>

      {!minimizeList && userList?.length > 0 && (
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
      )}
    </section>
  )
}
