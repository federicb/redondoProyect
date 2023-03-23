export default{
    namespaced: true,
    state: {
        amount: ''
    },
    mutations: {
        calculate(state){
            
            console.log(Math.ceil(state.amount))
        }
    }
}