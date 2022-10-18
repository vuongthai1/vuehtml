<template>
  <div class="container">
    <div class="footer">
      <MenuFooter />
      <FooterContact />
    </div>
  </div>
</template>

<script>
import MenuFooter from "./components/FooterMenu.vue";
import FooterContact from "./components/FooterContact.vue";

export default {
  name: "Footer",
  components: { MenuFooter, FooterContact },
};
</script>

<style lang="scss" scoped>
.footer {
  width: 1155px;
  height: 354px;
  display: flex;
  @media screen and (min-width: 1024px) {
    .footer {
      display: block;
    }
  }
  .payment {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    align-items: center;
    gap: 14.23px;
    width: 351px;
    height: 37.95px;
    padding: 130px 60px 0;
    li {
      a {
        text-decoration: none;
        color: #191919;
      }

      list-style-type: none;
    }
  }
  .copy__right {
    padding-left: 60px;
    p {
      font-family: "Jost";
      font-style: normal;
      font-weight: 400;
      font-size: 15px;
      line-height: 22px;

      color: #191919;
    }
  }
}
</style>
