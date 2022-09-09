export const state = () => ({
  index: 0,
  result: 0,
  phone: '18558559365',
  employees: 0
})

export const mutations = {
  setIndex(state, index) {
    state.index = index
  },
  setResult(state, result) {
    state.result = result
  },
  setPhone(state, phone) {
    state.phone = phone
  },
  setEmployees(state, employees) {
    state.employees = employees
  }
}

export const actions = {
  getIndex({ commit }) {
    commit('setIndex', index);
  },
  getResult({ commit }) {
    commit('setResult', result);
  },
  getPhone({ commit }) {
    commit('setPhone', phone);
  },
  getEmployees({ commit }) {
    commit('setEmployees', employees);
  }
}

export const getters = {
  index: state => state.index,
  result: state => state.result,
  phone: state => state.phone,
  employees: state => state.employees
}