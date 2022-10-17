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
      <ul class="info__bar">

      </ul>
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
      infoBarItems: [],
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
  height: 185px;
}
.info__bar__item {
  /* Auto layout */
  display: flex;
  flex-direction: row;
  align-items: center;
}
</style>
