<template>
  <div>
    <div>
      <Header />
      <Section />
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from "../components/shared/Header/Header";
import Section from "../components/shared/Section/Section";
import Footer from "../components/shared/Footer/Footer";

export default {
  components: { Header, Section,Footer },
  props: {
    post: { type: Object, default: null },
  },
};
</script>
<style lang="scss" scoped>

</style>
