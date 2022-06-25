import { createStore } from 'vuex'
import auth from './modules/auth'
import texts from './modules/texts'

export default createStore({
  state () {
    return {
      error: null,
      modalIsOpen: false,
      imageName: '',
      editData: {}
    }
  },
  mutations: {
    setError (state, error) {
      state.error = error
    },
    clearError (state) {
      state.error = null
    }
  },
  getters: {
    error: s => s.error
  },
  modules: {
    auth, texts
  }
})
