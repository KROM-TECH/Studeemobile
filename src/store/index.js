import { createStore } from 'vuex'

const store = createStore({
  state: {
    timetable: [],
    user: JSON.parse(localStorage.getItem('user')),
    verified:localStorage.getItem("verified"),
    menu:false
  },
  mutations: {
    changeMenu(state){
      const mobileCheck = ()=> {
        const toMatch = [
            /Android/i,
            /webOS/i,
            /iPhone/i,
     
        ];
    
        return toMatch.some((toMatchItem) => {
            return navigator.userAgent.match(toMatchItem);
        });
    }
      if(mobileCheck){
        state.menu = !state.menu
      }else{
        return null
      }
      
    },
    updateTimetable(state) {
      state.timetable = JSON.parse(localStorage.getItem("timeTable"));
    },
    loginUser(state, payload){
      state.user = payload
      state.verified = payload.emailVerified

      localStorage.setItem('verified',  payload.emailVerified);
      localStorage.setItem('user', JSON.stringify(payload));
      
    },
      logOut(state){
        state.user = null
        state.verified = null
        localStorage.setItem('verified',  null);
      localStorage.setItem('user', null);
      }

  },
  getters: {},
  actions: {}
}
)

export default store

