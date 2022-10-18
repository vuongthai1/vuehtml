<template>
  <div class="footer__menu">
    <FooterMenu />
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
</template>

<script>
import FooterMenu from "../../Menu/FooterMenu.vue";
export default {
  name: "MenuFooter",
  components: { FooterMenu },
};
</script>

<style lang="scss" scoped>
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
</style>
