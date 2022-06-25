import { signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { auth } from '@/firebase'

export default {
  actions: {
    async login ({ dispatch, commit }, { email, password }) {
      // eslint-disable-next-line no-useless-catch
      try {
        await signInWithEmailAndPassword(auth, email, password)
        commit('clearError')
      } catch (e) {
        commit('setError', e)
        throw e
      }
    },
    async logout ({ commit }) {
      await signOut(auth)
    }
  }
}
