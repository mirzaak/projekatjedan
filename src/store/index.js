import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'


const store = createStore({
    state:{
        sesija:null,
        username:null

    },
    getters:{
        sesija:(state)=>{
            return state.sesija
        },
        username:(state)=>{
            return state.username
        }
    },
    actions:{
        sesija(context, sesija){
            context.commit('sesija', sesija )
        },
        username(context, username){
            context.commit('username', username )
        }
    },
    mutations:{
        sesija(state, sesija){
            state.sesija = sesija
        },
        username(state, username){
            state.username = username
        },
    },
    plugins: [createPersistedState()],

})

export default store