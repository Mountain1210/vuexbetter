import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

var state={
    count:10
}

const mutations={
    increments(state){
       state.count++;
    },
     deincrements(state){
       state.count--;
    }
}
const actions={
    increment:({
        commit
    })=>{
        commit("increments")
    },
     deincrement:({
        commit
    })=>{
        commit("deincrements")
    },
    clickOdd:({commit,state})=>{ //这里还可以有第二个参数state也是就是面的那个state
        if(state.count%2==0){
                   commit ('increments');
        }else{
                    alert("这是奇数")
         }
    },
    clickAsync:({commit,state})=>{
        new Promise((resolve)=>{
                setTimeout(function(){
                    alert("异步成功");
                    commit('increments')
                    resolve()
                },1000)
        })
    }
}

const getters={
    count(state){
        return state.count
    },
    getOdd(state){
        return state.count%2==0?"这货偶数":"这是奇数"
    }
}

export default new Vuex.Store({
    state,mutations,actions,getters
});