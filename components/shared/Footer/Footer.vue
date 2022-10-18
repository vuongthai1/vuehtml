<template>
  <div class="container">
    <div class="footer">
      <MenuFooter />
      <ul class="payment">
        <li><i class="ri-visa-line"></i></li>
        <li><i class="ri-visa-line"></i></li>

        <li><i class="ri-visa-line"></i></li>

        <li><i class="ri-visa-line"></i></li>

        <li><i class="ri-visa-line"></i></li>

        <li><i class="ri-visa-line"></i></li>

        <li><i class="ri-visa-line"></i></li>
      </ul>
    </div>
  </div>
</template>

<script>
import MenuFooter from "./components/MenuFooter.vue";
export default {
  name: "Footer",
  components: { MenuFooter },
};
</script>

<style lang="scss" scope>
.footer {
  padding-left: 60px;
  width: 1155px;
  height: 354px;
  .payment {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    align-items: center;
    gap: 14.23px;
    width: 351px;
    height: 37.95px;
    padding: 130px 60px;
    li {
      a {
        text-decoration: none;
        color: #191919;
      }
      list-style-type: none;
    }
  }
}
</style>
