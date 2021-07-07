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
Vue.use(Vuex)

const setCookie = (name, value) => {
  let date = new Date();
  date.setTime(date.getTime() + (5 * 60 * 1000))
  const expires = "; expires=" + date.toUTCString()
  document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

const getCookie = (name) => {
  let nameEQ = name + "=";
  let ca = document.cookie.split(';');
  for(let i=0;i < ca.length;i++) {
    let c = ca[i];
    while (c.charAt(0)===' ') c = c.substring(1,c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}



// init state
const state = {
  druglikeness_result: JSON.parse(getCookie("druglikeness_result")),
}

const actions = {
  updateResult(context, value) {
    context.commit("UPDATE", value)
  }
}

const mutations = {
  UPDATE(state, value) {
    state.druglikeness_result = value
    setCookie("druglikeness_result", JSON.stringify(value))
  }
}

const store = new Vuex.Store({
  state,
  actions,
  mutations,
})


export default store