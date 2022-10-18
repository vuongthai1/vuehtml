<template>
  <div>
    <div>
      <pagination
        :totalPages="5"
        :perPage="5"
        :currentPage="currentPage"
        @pagechanged="onPageChange"
      />
    </div>
    <div>
      <div class="info__bar">
        <div class="info__bar__item">
          <i class="ri-truck-line"></i>
          <p>Free Delivery</p>
        </div>
        <div class="info__bar__item">
          <i class="ri-mail-open-line"></i>
          <p>Non-contact Shipping</p>
        </div>

        <div class="info__bar__item">
          <i class="ri-wallet-line"></i>
          <p>Money-back quarantee</p>
        </div>

        <div class="info__bar__item">
          <i class="ri-secure-payment-line"></i>
          <p>Secure Payment</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Pagination from "../../Pagination/Pagination";

export default {
  name: "ContainerFooter",
  components: {
    Pagination,
  },
  data() {
    return {
      currentPage: 1,
    };
  },
  methods: {
    onPageChange(page) {
      console.log(page);
      this.currentPage = page;
    },
  },
};
</script>
<style lang="scss">
.info__bar {
  width: 100%;
  height: 73px;
  padding-top: 140px;
  padding-left: 60px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  justify-content: center;
}
.info__bar__item {
  border-bottom: 1px solid #e6e6e6;
  border-top: 1px solid #e6e6e6;
  display: flex;
  align-items: center;
  gap: 24.5px;
  font-family: "Jost";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 23px;

  color: #191919;
}
</style>
