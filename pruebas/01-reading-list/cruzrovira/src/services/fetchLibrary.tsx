import datos from "../data/books.json"
import { type Data } from "../types/data"

export const fetchLibrary = (): Promise<Data> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(datos as Data)
    }, 1000)
  })
}
