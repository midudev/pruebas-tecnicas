import { library as initialLibrary } from '../mocks/library.json'

export function useMappedLibrary (){
    const mappedLibrary = initialLibrary?.map(item => ({
      id: item[Object.keys(item)[0]].ISBN,
      title: item[Object.keys(item)[0]].title,
      year: item[Object.keys(item)[0]].year,
      pages: item[Object.keys(item)[0]].pages,
      cover: item[Object.keys(item)[0]].cover,
      genre: item[Object.keys(item)[0]].genre,
      synopsis: item[Object.keys(item)[0]].synopsis,
      author: item[Object.keys(item)[0]].author.name,
      type: Object.keys(item)[0]
    }))
  
    return {library: mappedLibrary}  
}