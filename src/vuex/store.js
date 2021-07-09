/*
 * @Author: Kotori Y
 * @Date: 2021-07-06 20:04:06
 * @LastEditTime: 2021-07-07 14:21:16
 * @LastEditors: Kotori Y
 * @Description: 
 * @FilePath: /fastscopy_frontend/src/vuex/store.js
 * @Disclaim: I love Megumi forever and ever!!!
 */

import Vue from "vue"
import Vuex from "vuex"
import axios from "axios"
import {setCookie} from "../../public/js/scripts"

Vue.use(Vuex)


// init state
const state = {
  druglikeness_result: JSON.parse(sessionStorage.getItem("druglikeness_result")),
  fh_result: JSON.parse(sessionStorage.getItem("fh_result"))
}

const actions = {
  async evaluateDruglikeness(context, params) {
    return axios({
      method: "post",
      url: "http://192.168.1.128:8000/cal",
      data: params
    }).then(resp => {
      context.commit("EVALUATE_DRUGLIKENESS", resp.data)
    })
  },
  async filterFH(context, params) {
    return axios({
      method: "post",
      url: "http://192.168.1.128:8000/fh",
      data: params
    }).then(resp => {
      context.commit("FILTER_FH", resp.data)
    })
  }
}

const mutations = {
  EVALUATE_DRUGLIKENESS(state, value) {
    sessionStorage.setItem("druglikeness_result", JSON.stringify(value))
    state.druglikeness_result = value
    setCookie("druglikeness_result", JSON.stringify("true"))
  },
  FILTER_FH(state, value) {
    sessionStorage.setItem("fh_result", JSON.stringify(value))
    state.fh_result = value
    setCookie("fh_result", JSON.stringify("true"))
  }
}


const store = new Vuex.Store({
  state,
  actions,
  mutations,
})


export default store