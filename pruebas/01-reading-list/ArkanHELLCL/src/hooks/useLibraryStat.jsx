import { library } from '../mocks/library.json'
export function useLibraryStat(){
    const resultKey=[]
    const resultGenre=[]
    const resultAuthor=[]
    let resultObj={}
    let itemsTotal=0
    library.forEach(item =>{          
        itemsTotal=itemsTotal+1
        if (!resultKey.includes(Object.keys(item)[0])) resultKey.push(Object.keys(item)[0]) //types
        if (!resultGenre.includes(Object.values(item)[0].genre)) resultGenre.push(Object.values(item)[0].genre) //genre
        if (!resultAuthor.includes(Object.values(item)[0].author.name)) resultAuthor.push(Object.values(item)[0].author.name) //author
      
      //console.log(Object.values(item)[0].genre)
    })
    //console.log(resultGenre)
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
    //return resultKey        
    return resultObj
}