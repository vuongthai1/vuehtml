<template lang="html">
  <ul class="menu menu--secondary">
    <li class="menu__item" v-for="item in menuItems">
      <a href="item.url">{{ item.label }}</a>
    </li>
  </ul>
</template>

<script>
export default {
  name: "SecondaryMenu",
  data() {
    return {
      menuItems: [
        {
          label: "Jeans",
          url: "/jeans",
        },
        {
          label: "Jackets & Coat",
          url: "/jacketsandcoat",
        },
        {
          label: "Underwear",
          url: "/underwear",
        },
        {
          label: "Shirt",
          url: "/shirt",
        },
        {
          label: "Suits",
          url: "/suits",
        },
        {
          label: "Swimswear",
          url: "/swimwear",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.menu {
  padding: 5px;
  display: grid;
  width: 37px;
  height: 25px;
  grid-template-columns: repeat(6, 1fr);
  gap: 30px;
  grid-auto-flow: column;
  box-sizing: border-box;
  white-space: nowrap;
  @media only screen and (max-width: 768px) {
    /* For mobile phones: */
    [class*="menu__item"] {
      display: none;
    }
  }
  flex-wrap: nowrap;
  .menu--secondary {
    width: 39px;
    height: 25px;
  }
  .menu__item {
    a {
      text-decoration: none;
      color: #191919;
    }
    scroll-behavior: smooth;
    list-style-type: none;
    font-family: "Jost";
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 25px;
    
  }
}
</style>
