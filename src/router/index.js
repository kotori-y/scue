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
import Home from "@/pages/Home/Index";
import Druglikeness from "@/pages/Druglikeness/Index";
import DruglikenessResult from "@/pages/Druglikeness/DruglikenessResult/Index";
import DruglikenessResultTable from "@/pages/Druglikeness/DruglikenessResult/DruglikenessResultTable.vue";
import DruglikenessMain from "@/pages/Druglikeness/DruglikenessMain";
import Fh from "@/pages/Fh/Index";
import FhResult from "@/pages/Fh/FhResult/Index";
import FhResultTable from "@/pages/Fh/FhResult/FhResultTable";
import FhMain from "@/pages/Fh/FhMain";
import EarlyVisit from "@/pages/ResultError/EarlyVisit";
import NotFound from "@/pages/ResultError/NotFound";
import {getCookie} from "../../public/js/scripts";
Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Home,
      name: "home",
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
                if (!getCookie("evaluateDruglikeness")) next({name: "EarlyVisit"});
                else next();
              },
            },
            {
              path: "error",
              component: EarlyVisit,
              name: "EarlyVisit",
            },
          ],
        },
      ],
    },
    {
      path: "/fh",
      component: Fh,
      children: [
        {
          path: "/",
          component: FhMain,
          name: "FhMain",
        },
        {
          path: "result",
          component: FhResult,
          children: [
            {
              path: "/",
              name: "FhResult",
              component: FhResultTable,
              beforeEnter: (to, from, next) => {
                if (!getCookie("filterFH")) next({name: "EarlyVisitFH"});
                else next();
              },
            },
            {
              path: "error",
              component: EarlyVisit,
              name: "EarlyVisitFH",
            },
          ],
        },
      ],
    },
    {
      path: "/404",
      component: NotFound,
      name: "404"
    },
    {
      path: "*",
      redirect: {name: "404"}
    }
  ],
});

export default router;
