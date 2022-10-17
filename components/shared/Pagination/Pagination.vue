<template lang="hmtl">
  <ul class="pagination">
    <li class="pagination__item" type="button"
        @click="onClickPreviousPage"
        :disabled="isInFirstPage">
              <i class="ri-arrow-left-s-line"></i>

    </li>

    <!-- Visible Buttons Start -->

    <li
      v-for="page in pages"
      class="pagination__item"
        type="button"
        @click="onClickPage(page.name)"
        :disabled="page.isDisabled"
      >
        {{ page.name }}
    </li>

    <!-- Visible Buttons End -->

    <li class="pagination__item"
        type="button"
        @click="onClickNextPage"
        :disabled="isInLastPage"
      >
        <i class="ri-arrow-right-s-line"></i>

    </li>
  </ul>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    maxVisibleButtons: {
      type: Number,
      required: false,
      default: 5,
    },
    totalPages: {
      type: Number,
      required: true,
    },
    perPage: {
      type: Number,
      required: true,
    },
    currentPage: {
      type: Number,
      required: true,
    },
  },
  computed: {
    startPage() {
      // When on the first page
      if (this.currentPage === 1) {
        return 1;
      }

      // When on the last page
      if (this.currentPage === this.totalPages) {
        return this.totalPages - this.maxVisibleButtons;
      }

      // When inbetween
      return this.currentPage - 1;
    },
    pages() {
      const range = [];

      for (
        let i = this.startPage;
        i <=
        Math.min(this.startPage + this.maxVisibleButtons - 1, this.totalPages);
        i++
      ) {
        range.push({
          name: i,
          isDisabled: i === this.currentPage,
        });
      }

      return range;
    },
    isInFirstPage() {
      return this.currentPage === 1;
    },
    isInLastPage() {
      return this.currentPage === this.totalPages;
    },
  },
  methods: {
    // onClickFirstPage() {
    //   this.$emit("pagechanged", 1);
    // },
    onClickPreviousPage() {
      this.$emit("pagechanged", this.currentPage - 1);
    },
    onClickPage(page) {
      this.$emit("pagechanged", page);
    },
    onClickNextPage() {
      this.$emit("pagechanged", this.currentPage + 1);
    },
    // onClickLastPage() {
    //   this.$emit("pagechanged", this.totalPages);
    // },
  },
  isPageActive(page) {
    return this.currentPage === page;
  },
};
</script>
<style lang="scss" scoped>
.pagination {
  display: grid;
  grid-template-columns: (1fr 1fr 1fr 1fr 1fr 1fr 1fr);
  align-items: center;
  gap: 6px;
  position: absolute;
  width: 306px;
  height: 34px;
  left: 42%;
  li {
    text-align: center;
    font-family: "Jost";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    border: none;
    width: 34px;
    height: 34px;
    padding: 6px;
  }
  .pagination__item {
    display: grid;
    grid-template-columns: (repeat(5), 1fr);
    flex-wrap: wrap;
    box-sizing: border-box;
    width: 34px;
    height: 34px;
    border: 1px solid #cf4949;
    border-radius: 42px;
  }
}
</style>
