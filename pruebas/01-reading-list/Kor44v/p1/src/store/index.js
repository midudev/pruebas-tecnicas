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
    SET_LIBRARY(state,payload){
      state.library = payload
    }
  },
  actions: {
    getLibrary({commit}){
      fetch('/books.json')
      .then(resp=>resp.json())
      .then(data=>{
        console.log(data)
         //hacer la mutacion para agregar la data al store y hacer la llamada aqui en la action
        let books = data.library
        commit('SET_LIBRARY',books)

      })
      .catch((error)=>{
        console.log(error)
      })
    }
  },
  modules: {
  }
})
