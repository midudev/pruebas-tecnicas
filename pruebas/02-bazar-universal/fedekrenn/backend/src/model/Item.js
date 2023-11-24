import { readFile } from 'fs/promises'

export default class Item {
  async getItems () {
    try {
      const data = await readFile('./src/products.json', 'utf-8')
      const items = JSON.parse(data)
      return items.products
    } catch (error) {
      console.log(error)
    }
  }

  async getItemById (id) {
    try {
      const data = await this.getItems()
      return data.find(item => item.id === id)
    } catch (error) {
      console.log(error)
    }
  }

  async getItemsByCategory (category) {
    try {
      const data = await this.getItems()
      return data.filter(item => item.category.includes(category))
    } catch (error) {
      console.log(error)
    }
  }
}
