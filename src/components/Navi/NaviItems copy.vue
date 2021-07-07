<!--
 * @Author: your name
 * @Date: 2021-07-05 21:24:46
 * @LastEditTime: 2021-07-06 11:32:14
 * @LastEditors: Kotori Y
 * @Description: In User Settings Edit
 * @FilePath: /fastscopy_frontend/src/components/Navi/NaviItems copy.vue
-->
<template>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
      <li class="nav-item" v-for="(item, index) in FlatItems" :key="index">
        <router-link class="nav-link" :to="item.to">{{ item.name }}</router-link>
      </li>
      <li
        class="nav-item dropdown"
        v-for="item in DropdownItems"
        :key="item.name"
      >
        <a
          class="nav-link dropdown-toggle"
          id="navbarDropdownBlog"
          href="#"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          >{{ item.name }}</a
        >
        <ul
          class="dropdown-menu dropdown-menu-end"
          aria-labelledby="navbarDropdownBlog"
        >
          <li v-for="_item in item.children" :key="_item.name">
            <a class="dropdown-item" :href="_item.href">{{ _item.name }}</a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "NaviItems",
  data() {
    return {
      FlatItems: [
        { name: "Home", to: "/" },
        { name: "Druglikeness", to: "/" },
        // { name: "Concat", href: "concathtml" },
      ],
      DropdownItems: [
        {
          name: "A",
          children: [
            { name: "A1", href: "#" },
            { name: "A2", href: "#" },
          ],
        },
      ],
    };
  },
};
</script>