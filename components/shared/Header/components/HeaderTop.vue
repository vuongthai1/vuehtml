<template lang="html">
  <div class="header__top">
    <div class="header__top__content">
      <p>
        Summer sale for all swim suits - off 50%!
        <a href="#">
          <strong> Shop now </strong>
        </a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderTop",
};
</script>
<style lang="scss" scoped>
.header__top {
  @media (max-width: 1000px) {
    [class*="header__top"] {
      width: 100%;
    }
  }
  .header__top__content {
    background: #ffeeef;
    width: 100%;
  }
  p {
    justify-content: center;
    color: #191919;
    font-family: "Jost";
    text-align: center; /* identical to box height, or 52px */
    color: #191919;
  }

  a {
    text-decoration: none;
  }
}
</style>
