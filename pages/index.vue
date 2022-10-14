<template>
  <div>
    <div>
      <Header />
      <Container />
    </div>
  </div>
</template>

<script>
import Header from "../components/shared/Header/Header";
import Container from "../components/shared/Container/Container";
export default {
  components: { Header, Container },
  props: {
    post: { type: Object, default: null },
  },
};
</script>
<style lang="scss" scoped>
.container__title {
  padding: 21px;
  width: 444px;
  height: 52px;
  color: #191919;
  font-family: "Jost";
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 52px;
  /* identical to box height, or 52px */

  color: #191919;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
}

.container__sizebar {
  padding: 20px;
  display: flex;
  margin: auto;
  font-family: "Jost";
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 25px;
  /* identical to box height */
  color: #191919;
  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
  text-align: center;

  .container__item {
    font-family: "Jost";
    font-style: normal;
    font-weight: 500;
    font-size: 17px;
    line-height: 25px;
    margin: 0 30px;
    margin-left: 0px;
    /* identical to box height */
    color: #191919;
    /* Inside auto layout */
    flex: none;
    order: 0;
    flex-grow: 0;
  }

  .focused__item {
    margin-left: -10px;
    margin: -1px 30px;
    font-weight: 500;
    text-decoration: underline;
    /* identical to box height */
    color: #191919;
    /* Inside auto layout */
    flex: none;
    order: 0;
    flex-grow: 0;
  }
}

.container__card {
  display: flex;
  flex-wrap: wrap;

  .card__item {
    transition: 0.3s;
    width: 33%;
    border-radius: 5px;
    height: 400px;
    box-sizing: border-box;

    .card:hover {
      box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    }

    .card__image {
      display: flex;
      padding: 20px;
    }

    .card__content {
      width: 370px;
      height: 96px;
      font-family: "Jost";
      font-style: normal;
      font-weight: 400;
      font-size: 25px;
      line-height: 130%;
      /* or 32px */
      text-align: center;

      color: #191919;

      /* Inside auto layout */

      flex: none;
      order: 0;
      flex-grow: 0;
    }

    .day__upload {
      width: 370px;
      height: 19px;
      font-family: "Jost";
      font-style: normal;
      font-weight: 400;
      font-size: 13px;
      line-height: 19px;
      /* identical to box height */
      text-align: center;
      color: #191919;
      /* Inside auto layout */
    }

    .card__thumbnail {
      position: relative;
    }

    .card__chip {
      padding: 0px 10px;
      gap: 13px;
      text-align: center;
      background: #ffffff;
      border-radius: 55px;
      position: absolute;
      top: 4px;
      left: 4px;
      z-index: 99;
      display: flex;
    }
  }

  .pagination {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 6px;
    position: absolute;
    width: 306px;
    height: 34px;
    left: 42%;
    top: 1530px;

    .pagination__item {
      display: flex;
      flex-wrap: wrap;
      box-sizing: border-box;
      width: 34px;
      height: 34px;
      border: 1px solid #cf4949;
      border-radius: 42px;
      /* Inside auto layout */
      flex: none;
      order: 1;
      flex-grow: 0;
      text-align: center;
    }

    .pagination__number {
      padding-left: 12px;
      text-align: center;
      position: absolute;
      width: 9px;
      height: 20px;
      top: 6.5px;
      font-family: "Jost";
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 20px;
      color: #191919;
    }
  }
}

.info__bar {
  position: absolute;
  width: 1230px;
  height: 73px;
  left: 185px;
  top: 1630px;
}

.info__bar__item {
  /* Auto layout */
  display: flex;
  flex-direction: row;
  align-items: center;
}
</style>
