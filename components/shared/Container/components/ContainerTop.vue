<template lang="html">
    <ul class="breakcrumb">
      <a href="/page">Home</a>
      <a><i class="ri-arrow-right-s-line" /></a>
      <a href="/page">Home</a>
    </ul>
</template>

<script>
export default {
 
  name: "ContainerTop",
};
</script>

<style lang="scss">

.breakcrumb {
  width: 86.36px;
  height: 19px;
  display: grid;
  justify-content: space-between;
  flex-wrap: nowrap;
  margin: 20px;
  grid-auto-flow: column;
  li {
    list-style-type: none;
  }
  div {
    align-items: center;
    
  }
  a {
    width: fit-content;
    position: relative;
    text-decoration: none;
    list-style-type: none;
    color: #808080;
    font-family: "Jost";
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 19px;
    color: #808080;
  }
}
</style>
