<template>
  <div>
    <div>
      <Header />
      <Container />
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from "../components/shared/Header/Header";
import Container from "../components/shared/Container/Container";
import Footer from "../components/shared/Footer/Footer";

export default {
  components: { Header, Container,Footer },
  props: {
    post: { type: Object, default: null },
  },
};
</script>
<style lang="scss" scoped>

</style>
