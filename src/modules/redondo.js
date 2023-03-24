export default {
    namespaced: true,
    state: {
      amount: ''
    },
    mutations: {
      updateAmount(state, newAmount) {
        state.amount = newAmount;
      }
    },
    actions: {
      setAmount({ commit }, newAmount) {
        commit('updateAmount', newAmount);
      }
    },
    getters: {
      totalAmount(state) {
        const amount = parseFloat(state.amount);
        const total = Math.ceil(amount);
        return total;
      },
      difference(state, getters) {
        const amount = parseFloat(state.amount);
        const total = parseFloat(getters.totalAmount);
        const difference = (total - amount).toFixed(2);
        return difference;
      }
    }
  }