<template>
  <div class="container">
    <div class="footer">
      <MenuFooter />
      <ul class="payment">
        <li><i class="ri-visa-line"></i></li>
        <li><i class="ri-mastercard-line"></i></li>

        <li><i class="ri-mastercard-fill"></i></li>

        <li><i class="ri-paypal-line"></i></li>

        <li><i class="ri-paypal-fill"></i></li>

        <li><i class="ri-skype-fill"></i></li>

        <li><i class="ri-wechat-pay-fill"></i></li>
      </ul>
      <div class="copy__right">
        <p>Copyright © 2021, Your Store. All Rights Reserved.</p>
      </div>
    </div>
  </div>
</template>

<script>
import MenuFooter from "./components/FooterMenu.vue";
export default {
  name: "Footer",
  components: { MenuFooter },
};
</script>

<style lang="scss" scoped>
.footer {
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
