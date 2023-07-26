import { useMappedLibrary } from "./useMappedLibrary"

export function useLibraryStat(){
    const {library: mappedLibrary} = useMappedLibrary()

    const resultKey=[]
    const resultGenre=[]
    const resultAuthor=[]
    let resultObj={}
    let itemsTotal=0
    mappedLibrary.forEach(item =>{          
        itemsTotal=itemsTotal+1
        if (!resultKey.includes(item.type)) resultKey.push(item.type) //types
        if (!resultGenre.includes(item.genre)) resultGenre.push(item.genre) //genre
        if (!resultAuthor.includes(item.author)) resultAuthor.push(item.author) //author            
    })    
    resultObj = {
      itemType:{        
        type : resultKey,
        total : resultKey.length
      },
      itemGenre:{
        type : resultGenre,
        total : resultGenre.length
      },
      itemAuthor:{
        type : resultAuthor,
        total : resultAuthor.length
      },
      itemsTotal
    }    
    return resultObj
}