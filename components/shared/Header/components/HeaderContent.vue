<template lang="html">
  <div class="header__content">
    <div class="header__logo"><img src="image/Capture.PNG" alt="" /></div>
    <div class="header__menu">
      <HeaderMenu />
    </div>

    <div class="header__actions">
      <a class="header__actions__search" href="#"
        ><i class="ri-search-line"></i
      ></a>
      <a class="header__actions__user" href="#"><i class="ri-user-line"></i></a>
    </div>
  </div>
</template>

<script>
import HeaderMenu from "../../Menu/HeaderMenu";

export default {
  name: "HeaderContent",
  components: { HeaderMenu },
};
</script>

<style lang="scss">
.header__content {
  max-width: 100%;
  display: grid;
  grid-template-columns: 1fr 700px 1fr;
  grid-gap: 24px;
  box-sizing: border-box;
  @media (min-width: 600 px) {
    [class*="header__content"] {
      width: 100%;
    }
  }
}

.header__logo {
  align-items: center;
  display: flex;
  justify-content: flex-start;
  justify-content: center;
  @media only screen and (max-width: 680px) {
    img {
      width: 100px;
      height: 40px;
    }
  }
}
.header__actions {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 50px;
  padding-right: 27%;
  a {
    text-decoration: none;
  }
}

@media (min-width: 700px) {
  .header__actions__search {
    display: block;
  }
  .header__actions__user {
    display: none;
  }
}
@media (min-width: 1000px) {
  .header__actions__search {
    display: block;
  }
  .header__actions__user {
    display: block;
  }
}
</style>
