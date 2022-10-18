<template lang="html">
  <div class="blog">
    <div class="blog__item" v-for="post in posts">
      <div class="blog__badge">
        <div class="badge__item">{{ post.chip1 }}</div>
        <div class="badge__item">{{ post.chip2 }}</div>
      </div>
      <div class="blog__image"><img :src="post.img" alt="" /></div>
      <div class="blog__content">{{ post.content }}</div>
      <div class="day__upload">{{ post.dayUpload }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Post",
  data() {
    return {
      posts: [
        {
          img: "image/8.png",
          content:
            "The best ways to change your summer wardrobe into autumn wardrobe.",
          dayUpload: "March 05,2020",
          chip1: "fashion",
          chip2: "women",
        },
        {
          img: "image/9.png",
          content:
            "The best ways to change your summer wardrobe into autumn wardrobe.",
          dayUpload: "March 05,2020",
          chip1: "fashion",
          chip2: "women",
        },
        {
          img: "image/1.png",
          content:
            "The best ways to change your summer wardrobe into autumn wardrobe.",
          dayUpload: "March 05,2020",
          chip1: "fashion",
          chip2: "women",
        },
        {
          img: "image/2.png",
          content:
            "The best ways to change your summer wardrobe into autumn wardrobe.",
          dayUpload: "March 05,2020",
          chip1: "fashion",
          chip2: "women",
        },
        {
          img: "image/3.png",
          content:
            "The best ways to change your summer wardrobe into autumn wardrobe.",
          dayUpload: "March 05,2020",
          chip1: "fashion",
          chip2: "women",
        },
        {
          img: "image/4.png",
          content:
            "The best ways to change your summer wardrobe into autumn wardrobe.",
          dayUpload: "March 05,2020",
          chip1: "fashion",
          chip2: "women",
        },
        {
          img: "image/5.png",
          content:
            "The best ways to change your summer wardrobe into autumn wardrobe.",
          dayUpload: "March 05,2020",
          chip1: "fashion",
          chip2: "women",
        },
        {
          img: "image/6.png",
          content:
            "The best ways to change your summer wardrobe into autumn wardrobe.",
          dayUpload: "March 05,2020",
          chip1: "fashion",
          chip2: "women",
        },
        {
          img: "image/7.png",
          content:
            "The best ways to change your summer wardrobe into autumn wardrobe.",
          dayUpload: "March 05,2020",
          chip1: "fashion",
          chip2: "women",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.blog {
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  .blog__item {
    transition: 0.3s;
    border-radius: 5px;
    height: 400px;
    box-sizing: border-box;

    .blog:hover {
      box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    }

    .blog__image {
      max-width: 100%;
      height: auto;
    }

    .blog__content {
      font-family: "Jost";
      font-style: normal;
      font-weight: 400;
      font-size: 25px;
      line-height: 130%;
      /* or 32px */
      text-align: center;
      color: #191919;
    }

    .day__upload {
      font-family: "Jost";
      font-style: normal;
      font-weight: 400;
      font-size: 13px;
      line-height: 19px;
      text-align: center;
      color: #191919;
      padding-top: 20px;
    }
    .blog__badge {
      position: relative;
      top: 33px;
      left: 13px;
      width: 100%;
      z-index: 10;
    }
    .badge__item {
      background-color: white;
      font-family: "Jost";
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 17px;
      color: #191919;
      font-weight: 500;
      border-radius: 40px;
      font-size: 12px;
      line-height: 20px;
      padding: 0 10px;
      display: inline-block;
    }
  }
}
@media (min-width: 768px) {
  .blog {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
  }
}
@media (min-width: 1024px) {
  .blog {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
  }
}
</style>
