/*
 * @Author: Kotori Y
 * @Date: 2021-07-06 09:02:54
 * @LastEditTime: 2021-07-07 10:25:30
 * @LastEditors: Kotori Y
 * @Description: In User Settings Edit
 * @FilePath: /fastscopy_frontend/src/router/index.js
 */

import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../pages/Home/Index";
import Druglikeness from "../pages/Druglikeness/Index";
import DruglikenessResult from "../pages/Druglikeness/DruglikenessResult/Index";
import DruglikenessResultError from "../pages/Druglikeness/DruglikenessResult/DruglikenessResultError.vue";
import DruglikenessResultTable from "../pages/Druglikeness/DruglikenessResult/DruglikenessResultTable.vue";
import DruglikenessMain from "../pages/Druglikeness/DruglikenessMain/Index";
// eslint-disable-next-line no-unused-vars
import {getCookie} from "../../public/js/scripts"
Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/druglikeness",
      component: Druglikeness,
      children: [
        {
          path: "/",
          component: DruglikenessMain,
          name: "DruglikenessMain",
        },
        {
          path: "result",
          component: DruglikenessResult,
          children: [
            {
              path: "/",
              name: "DruglikenessResult",
              component: DruglikenessResultTable,
              beforeEnter: (to, from, next) => {
                if (!getCookie("druglikeness_result")) next({ name: "DruglikenessResultError" });
                else next();
              },
            },
            {
              path: "error",
              component: DruglikenessResultError,
              name: "DruglikenessResultError",
            },
          ],
        },
      ],
    },
  ],
});

export default router;
