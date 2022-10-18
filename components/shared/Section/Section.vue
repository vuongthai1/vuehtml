<template lang="html">
  <div class="container">
    <ContainerTop />
    <ContainerContent />
    <ContainerFooter />
  </div>
</template>

<script>
import ContainerTop from "./components/SectionTop.vue";
import ContainerContent from "./components/SectionnBlog.vue";
import ContainerFooter from "./components/SectionFooter.vue";
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
