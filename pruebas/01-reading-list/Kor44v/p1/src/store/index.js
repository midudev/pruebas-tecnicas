import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    library:[],
    lectura:[]
  },
  getters: {
    getLength(state){
      return state.library.length
    }
  },
  mutations: {
    SET_LIBRARY(state,payload){
      state.library = payload
    },
    ADD_LECTURA(state,books){
      // let exist = state.lectura.some(p=>p.id==books.id)
      // if(!exist){
      // }
      state.lectura.push(books)
      console.log('books',books)
    },
    DELETE_LECTURA(state,books){
      let index = state.lectura.findIndex(p=> p == books)
      console.log(index)
      state.lectura.splice(index,1)
    }
  },
  actions: {
    getLibrary({commit}){
      fetch('/books.json')
      .then(resp=>resp.json())
      .then(data=>{
        // console.log(data)
        let books = data.library

        commit('SET_LIBRARY',books)

      })
      .catch((error)=>{
        console.log(error)
      })
    },
    add_lectura({commit},books){
      commit('ADD_LECTURA',books)
    },
    delete_lectura({commit},books){
      commit('DELETE_LECTURA',books)
    }

  },
  modules: {
  }
})
