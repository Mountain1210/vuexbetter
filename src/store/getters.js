export default{
    count:(state)=>{
        return state.count;
    },
    getOdd(state){
        return state.count%2==0?"这货偶数":"这是奇数"
    }
}