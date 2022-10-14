<template lang="html">
  <div class="container">
    <ContainerTop />
    <ContainerContent />
  </div>
</template>

<script>
import ContainerTop from "./components/ContainerTop.vue";
import ContainerContent from "./components/ContainerContent.vue";

export default {
  name: "Container",
  components: {
    ContainerTop,
    ContainerContent,
  },
};
</script>

<style></style>
