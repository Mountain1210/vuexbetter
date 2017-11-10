import * as types from './type'


console.log(types)
export default{
    increment:({commit})=>{
        commit(types.INCREMENT)
    },
     deincrement:({
        commit
    })=>{
        commit(types.DEINCREMENT)
    },
    clickOdd:({commit,state})=>{ //这里还可以有第二个参数state也是就是面的那个state
        if(state.mutations.count%2==0){
                   commit (types.INCREMENT);
        }else{
            console.log(state)
                    alert("这是奇数")
         }
    },
    clickAsync:({commit,state})=>{
        new Promise((resolve)=>{
                setTimeout(function(){
                    alert("异步成功");
                    commit(types.INCREMENT)
                    resolve()
                },1000)
        })
    }
}