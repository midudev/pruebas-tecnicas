export const removeElement = (
  ISBN,
  fromList,
  library,
  setLibrary,
  lecture,
  setLecture
) => {
  if (fromList === 'library') {
    const removedElement = library.find((element) => element.book.ISBN === ISBN)

    if (removedElement) {
      setLibrary((prevLibrary) =>
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
      setLibrary((prevLibrary) => [...prevLibrary, removedElement])
    }
  }
}
