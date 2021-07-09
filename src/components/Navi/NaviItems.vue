<!--
 * @Author: Kotori Y
 * @Date: 2021-07-05 21:24:46
 * @LastEditTime: 2021-07-06 11:34:04
 * @LastEditors: Kotori Y
 * @Description: 
 * @FilePath: /fastscopy_frontend/src/components/Navi/NaviItems.vue
 * @Disclaim: I love Megumi forever and ever!!!
-->

<template>
  <div id="navbarSupportedContent" class="collapse navbar-collapse">
    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
      <li
          v-for="item in items"
          :key="item.name"
          :class="{ 'nav-item': true, dorpdown: item.dropdown }"
      >
        <router-link
            v-bind="dropdownProps(item.dropdown)"
            :class="{ 'nav-link': true, 'dropdown-toggle': item.dropdown }"
            :to="item.to"
        >{{ item.name }}
        </router-link>
        <ul
            v-if="item.dropdown"
            aria-labelledby="navbarDropdownBlog"
            class="dropdown-menu dropdown-menu-end"
        >
          <li v-for="_item in item.children" :key="_item.name">
            <router-link :to="_item.to" class="dropdown-item">{{
                _item.name
              }}
            </router-link>
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
        {name: "Home", to: "/", dropdown: false, children: []},
        {
          name: "Services",
          to: "javascript:void(0)",
          dropdown: true,
          children: [{name: "Druglikeness", to: "/druglikeness"},
            {name: "Frequent Hitters", to: "/fh"}],
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

<style scoped>

li {
  font-size: 20px !important;
}

</style>