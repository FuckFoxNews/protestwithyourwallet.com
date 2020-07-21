import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    company: null,
    companies: []
  },
  mutations: {
    // company mutations
    setCompany(state,company){
      state.company = company;
    },
    setCompanies(state,companies){
      state.companies = companies;
    }
  },
  actions: {
    // company actions
    async getCompany(context, payload) {
      try {
        let response = await axios.get("/api/company/" + payload.id);
        context.commit("setCompany", response.data);
      } catch (error) {
        console.log(error);
      }
    },
    async getCompanies(context) {
      try {
        let response = await axios.get("/api/company/");
        context.commit('setCompanies', response.data);
      } catch (error) {
        console.log(error);
      }
    }
  },
  getters: {
    company: (state) => (id) => {
      return state.companies.filter( c => c.id === Number(id))[0];
    }
  },
  modules: {
  }
})
