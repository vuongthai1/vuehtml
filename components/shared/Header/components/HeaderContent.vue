<template lang="html">
  <div class="container">
    <div class="header__content">
      <div class="header__left">
        <div class="header__logo"><img src="image/Capture.PNG" alt="" /></div>
      </div>
      <div class="header__menu">
        <PrimaryMenu />
      </div>

      <div class="header__actions">
        <a class="header__item1" href="#"><i class="ri-search-line"></i></a>
        <a class="header__item2" href="#"><i class="ri-user-line"></i></a>
      </div>
    </div>
  </div>
</template>

<script>
import PrimaryMenu from "../../Menu/PrimaryMenu";
export default {
  name: "HeaderContent",
  components: { PrimaryMenu },
};
</script>

<style lang="scss">
.header__content {
  max-width: 100%;
  display: grid;
  grid-template-columns: 1fr 700px 1fr;
  grid-gap: 24px;
  box-sizing: border-box;
  @media only screen and (max-width: 680px) {
    [class*="header__content"] {
      width: 100%;
    }
  }
}
.header__left {
  align-items: center;
  display: flex;
  justify-content: flex-start;
}
.header__logo {
  justify-content: center;
  @media only screen and (max-width: 680px) {
    img {
      width: 100px;
      height: 40px;
    }
  }
}
.header__actions {
  padding-left: 30px;
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
  align-items: center;
  gap: 50px;

  a {
    text-decoration: none;
  }
  @media only screen and (min-width: 600px) {
    .header__item1 {
      display: flex;
    }
    .header__item2 {
      display: flex;
    }
  }
}
</style>
