<template>
  <div class="container">
    <div class="container__title">Latest news from yobazar</div>
    <div class="category">
      <CategoryMenu />
    </div>
    <div class="blog">
      <Post />
    </div>
  </div>
</template>

<script>
import CategoryMenu from "../../Menu/CategoryMenu";
import Post from "../../../components/Post/Post.vue";

export default {
  name: "ContainerContent",
  components: { CategoryMenu, Post },
};
</script>

<style lang="scss" scope>
.container__title {
  padding-left: 5px;
  width: 444px;
  height: 52px;
  color: #191919;
  font-family: "Jost";
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 52px;
  color: #191919;
}
.category {
  padding: 0px;
  gap: 30px;
}
.blog {
  padding: 0px;
  gap: 30px;
}
</style>
