<template lang="html">
  <ul class="menu menu--primary">
    <li class="menu__item" v-for="item in menuItems">
      <a href="item.url">{{ item.label }}</a>
    </li>
    <li class="disable__item" v-for="item in disableItem">
      <a href="item.url">{{ item.label }}</a>
    </li>
  </ul>
</template>

<script>
export default {
  name: "HeaderMenu",
  data() {
    return {
      menuItems: [
        {
          label: "Shop",
          url: "/shop",
        },
        {
          label: "Categories",
          url: "/categories",
        },
        {
          label: "Men",
          url: "/shop/men",
        },
        {
          label: "Women",
          url: "/shop/women",
        },
        {
          label: "Pages",
          url: "/pages",
        },
      ],
      disableItem: [
        {
          label: "Blog",
          url: "/pages",
        },
        {
          label: "Contact",
          url: "/pages",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.menu {
  padding: 32px;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-auto-flow: column;
  box-sizing: border-box;
  white-space: nowrap;
  @media only screen and (max-width: 1000px) {
    /* For mobile phones: */
    [class*="menu__item"] {
      display: none;
    }

    [class*="disable__item"] {
      display: none;
    }
  }
  flex-wrap: nowrap;
  .menu--primary {
    width: 39px;
    height: 25px;
  }
  .menu__item {
    a {
      text-decoration: none;
    }
    scroll-behavior: smooth;

    list-style-type: none;
    font-family: "Jost";
    font-style: normal;
    font-weight: 500;
    font-size: 17px;
    line-height: 25px;
    color: #191919;
  }
  .disable__item {
    a {
      text-decoration: none;
    }
    list-style-type: none;
    font-family: "Jost";
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 25px;

    color: #191919;
  }
}
</style>
