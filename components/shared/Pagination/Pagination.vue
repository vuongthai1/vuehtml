<template>
  <div class="pagination">

  </div>
</template>

<script>
export default {
  name: "Pagination",
};
</script>

.
<style lang="scss" scoped>
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
</style>
