import {INCREMENT,DEINCREMENT} from './type.js' //只引一个
import getters from './getters.js' //只引一个


const state={
    count:20
}

const mutations={
    [INCREMENT](state){
        state.count++
    },
     [DEINCREMENT](state){
       state.count--;
    }
}

export default{
    state,mutations,getters
}