<template lang="html">
  <div class="container">
    <ContainerTop />
    <ContainerContent />
    <ContainerFooter />
  </div>
</template>

<script>
import ContainerTop from "./components/ContainerTop.vue";
import ContainerContent from "./components/ContainerContent.vue";
import ContainerFooter from "./components/ContainterFooter.vue";
export default {
  name: "Container",
  components: {
    ContainerTop,
    ContainerContent,
    ContainerFooter,
  },
};
</script>

<style></style>
