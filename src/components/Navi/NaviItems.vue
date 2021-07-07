<!--
 * @Author: Kotori Y
 * @Date: 2021-07-05 21:24:46
 * @LastEditTime: 2021-07-06 11:34:04
 * @LastEditors: Kotori Y
 * @Description: 
 * @FilePath: /fastscopy_frontend/src/components/Navi/NaviItems.vue
 * @Disclam: I love Megumi forever and ever!!!
-->

<template>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
      <li
        :class="{ 'nav-item': true, dorpdown: item.dropdown }"
        v-for="item in items"
        :key="item.name"
      >
        <router-link
          :class="{ 'nav-link': true, 'dropdown-toggle': item.dropdown }"
          :to="item.to"
          v-bind="dropdownProps(item.dropdown)"
          >{{ item.name }}
        </router-link>
        <ul
          v-if="item.dropdown"
          class="dropdown-menu dropdown-menu-end"
          aria-labelledby="navbarDropdownBlog"
        >
          <li v-for="_item in item.children" :key="_item.name">
            <router-link class="dropdown-item" :to="_item.to">{{
              _item.name
            }}</router-link>
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
      items: [
        { name: "Home", to: "/", dropdown: false, children: [] },
        {
          name: "Servies",
          to: "#",
          dropdown: true,
          children: [{ name: "Druglikeness", to: "/druglikeness" }],
        },
        // { name: "Concat", href: "concathtml" },
      ],
    };
  },
  methods: {
    dropdownProps(dropdown) {
      if (dropdown) {
        return {
          id: "navbarDropdownBlog",
          href: "#",
          role: "button",
          "data-bs-toggle": "dropdown",
          "aria-expanded": "false",
        };
      }
      return {};
    },
  },
};
</script>