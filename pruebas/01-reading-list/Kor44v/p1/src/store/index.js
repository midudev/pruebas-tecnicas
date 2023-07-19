import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    library:[]
  },
  getters: {
  },
  mutations: {
  },
  actions: {
    getLibrary(){
      fetch('/books.json')
      .then(resp=>resp.json())
      .then(data=>{
        console.log(data)
         //hacer la mutacion para agregar la data al store y hacer la llamada aqui en la action
      })
      .catch((error)=>{
        console.log(error)
      })
    }
  },
  modules: {
  }
})
