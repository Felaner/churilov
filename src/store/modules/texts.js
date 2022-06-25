import { doc, updateDoc, getDocs, collection } from 'firebase/firestore'
import { db } from '@/firebase'

export default {
  actions: {
    async fetchBlocks ({ commit }) {
      try {
        const blocks = []
        const data = await getDocs(collection(db, 'blocks'))
        data.forEach(doc => {
          blocks.push(doc.data())
        })
        return blocks
      } catch (e) {
        commit('setError', e)
        throw e
      }
    },
    // async fetchTextsById ({ commit, dispatch }, id) {
    //   try {
    //     const text = (await firebase.database().ref('/texts').child(id).once('value')).val() || {}
    //     return { ...text, id }
    //   } catch (e) {
    //     commit('setError', e)
    //     throw e
    //   }
    // },
    async updateTexts ({ commit, dispatch }, { block, docData }) {
      try {
        const docRef = doc(db, 'blocks', 'JEpnVCERhWIyQDqEODZo')
        await updateDoc(docRef, { [block]: docData })
      } catch (e) {
        commit('setError', e)
        throw e
      }
    }
    // async createText ({ commit }, { block, text }) {
    //   try {
    //     const newText = await addDoc(collection(db, 'blocks'), {
    //       block: block,
    //       text: text
    //     })
    //     console.log(newText.id)
    //   } catch (e) {
    //     commit('setError', e)
    //     throw e
    //   }
    // }
  }
}
