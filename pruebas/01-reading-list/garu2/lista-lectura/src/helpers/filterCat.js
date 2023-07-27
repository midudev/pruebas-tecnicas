export const filterCat = (data, value) => {
  let filterData = [];
  const newValue = value.split("-")[1]
  const type = value.split("-")[0]

  if(value === '') return data;

  if (type === 'c') {
    filterData = data.filter(item => {
      return newValue === item.book.genre
    })
  } else if (type === 's') {
    const lowerValue = newValue.toLowerCase();
    filterData = data.filter(item =>  item.book.title.includes(lowerValue) || item.book.title===newValue) 
  }

  return filterData;
}