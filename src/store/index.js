import { createStore } from 'vuex'

const store = createStore({
  state: {
    timetable: [],
    user: null
  },
  mutations: {
    updateTimetable(state) {
      state.timetable = JSON.parse(localStorage.getItem("timeTable"));
    },
    loginUser(state, payload){
      state.user = payload
    },
      logOut(state){
        state.user = null 
        localStorage.setItem("hito",null);
      }
  },
  getters: {},
  actions: {}
}
)

export default store

