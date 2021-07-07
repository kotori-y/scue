/*
 * @Author: Kotori Y
 * @Date: 2021-07-06 20:04:06
 * @LastEditTime: 2021-07-07 10:22:04
 * @LastEditors: Kotori Y
 * @Description: 
 * @FilePath: /fastscopy_frontend/src/vuex/store.js
 * @Disclam: I love Megumi forever and ever!!!
 */

import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)


// init state
const state = {
  druglikeness_result: JSON.parse(localStorage.getItem("result"))
}

const actions = {
  updateResult(context, value) {
    context.commit("UPDATE", value)
  }
}

const mutations = {
  UPDATE(state, value) {
    state.druglikeness_result = value
    localStorage.setItem("druglikeness_result", JSON.stringify(value))
  }
}

const store = new Vuex.Store({
  state,
  actions,
  mutations,
})


export default store