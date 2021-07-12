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
import {getCookie, setCookie} from "../../public/js/scripts"

Vue.use(Vuex)

// init state
const state = {
  evaluateDruglikeness: null,
  filterFH: null,
}

const actions = {
  async evaluateDruglikeness(context, params) {
    return axios({
      method: "post",
      url: "http://192.168.1.128:8000/cal",
      data: params,
      headers: {"x-token": getCookie("x-token")}
    }).then(resp => {
      context.commit("EVALUATE_DRUGLIKENESS", resp.data)
    })
  },
  async filterFH(context, params) {
    return axios({
      method: "post",
      url: "http://192.168.1.128:8000/fh",
      data: params,
      headers: {"x-token": getCookie("x-token")}
    }).then(resp => {
      context.commit("FILTER_FH", resp.data)
    })
  }
}

const mutations = {
  EVALUATE_DRUGLIKENESS(state, value) {
    const _uuid = value["_uuid"]
    setCookie("evaluateDruglikeness", _uuid)
    state.evaluateDruglikeness = _uuid
  },
  FILTER_FH(state, value) {
    const _uuid = value["_uuid"]
    setCookie("filterFH", _uuid)
    state.filterFH = _uuid
  }
}


const store = new Vuex.Store({
  state,
  actions,
  mutations,
})


export default store