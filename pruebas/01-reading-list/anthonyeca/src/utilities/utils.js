export const removeElement = (
  ISBN,
  fromList,
  filtered,
  setFiltered,
  lecture,
  setLecture
) => {
  if (fromList === 'filtered') {
    const removedElement = filtered.find(
      (element) => element.book.ISBN === ISBN
    )

    if (removedElement) {
      setFiltered((prevLibrary) =>
        prevLibrary.filter((element) => element.book.ISBN !== ISBN)
      )
      setLecture((prevLecture) => [...prevLecture, removedElement])
    }
  } else if (fromList === 'lecture') {
    const removedElement = lecture.find((element) => element.book.ISBN === ISBN)

    if (removedElement) {
      setLecture((prevLecture) =>
        prevLecture.filter((element) => element.book.ISBN !== ISBN)
      )
      setFiltered((prevLibrary) => [...prevLibrary, removedElement])
    }
  }
}
