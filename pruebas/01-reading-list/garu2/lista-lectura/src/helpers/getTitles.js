export const getTitles = (data) => {
  return data.map(item => item.book.title)
}