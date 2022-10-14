<template lang="html">
  <div class="header">
    <HeaderTop />
    <div class="container">
      <HeaderContent />
    </div>
  </div>
</template>

<script>
import PrimaryMenu from "../Menu/PrimaryMenu";
import HeaderTop from "./components/HeaderTop";
import HeaderContent from "./components/HeaderContent";

export default {
  name: "Header",
  components: { HeaderContent, HeaderTop, PrimaryMenu },
};
</script>
<style lang="scss">
.header {
  margin: 0;
  padding: 0;
  width: 100%;
  border-bottom: 1px solid #e6e6e6;
}
</style>
