import { createStore } from 'vuex'
import * as storage from '@/utils/storage'
export const initState = {
  showToolbar: storage.get('showToolbar', true),
}
export type AppState = typeof initState
export default createStore({
  state: initState,
  mutations: {
    setShowToolbar (state, data) {
      state.showToolbar = data
    },
  },
  getters: {
    isShowToolbar (state) {
      return state.showToolbar
    }
  }
})
