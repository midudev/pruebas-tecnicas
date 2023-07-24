export const filterCat = (data, value) => {
  if(value === '') return data;

  const filterData = data.filter(item => {
    return value === item.book.genre
  })
  return filterData;
}