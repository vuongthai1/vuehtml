<template lang="html">
  <div class="menu__footer">
    <ul class="menu menu--footer">
      <li class="menu__item" v-for="item in menuItems1">
        <a href="item.url">{{ item.label }}</a>
      </li>
    </ul>
    <ul class="menu menu--footer">
      <li class="menu__item" v-for="item in menuItems2">
        <a href="item.url">{{ item.label }}</a>
      </li>
    </ul>
    <ul class="menu menu--footer">
      <li class="menu__item" v-for="item in menuItems3">
        <a href="item.url">{{ item.label }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "FooterMenu",
  data() {
    return {
      menuItems1: [
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
      menuItems2: [
        {
          label: "Shorts",
          url: "/shorts",
        },
        {
          label: "Suits",
          url: "/suits",
        },
        {
          label: "Swimwear ",
          url: "/swimwear",
        },
        {
          label: "Tracksuits",
          url: "/tracksuits",
        },
        {
          label: "Trousers",
          url: "/suits",
        },
        {
          label: "T-Shirt",
          url: "/t-shirt",
        },
      ],
      menuItems3: [
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
.menu__footer {
  width: 600px;
  height: 150px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  padding: 0 60px;
}
.menu {
  padding: 5px;
  width: 37px;
  height: 25px;
  gap: 10px;
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
  .menu--footer {
    width: 39px;
    height: 25px;
  }
  .menu__item {
    a {
      text-decoration: none;
      color: #191919;
    }
    list-style-type: none;
    font-family: "Jost";
    font-style: normal;
    font-weight: 500;
    font-size: 17px;
    line-height: 25px;
    padding: 2px;
  }
}
</style>
