<template lang="html">
  <div class="blog">
    <div class="blog__item" v-for="item in menuItems">
      <div><img :src="item.img" alt="" /></div>
      <div class="blog__content">{{ item.content }}</div>
      <div class="day__upload">{{ item.dayUpload }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ThirdMenu",
  data() {
    return {
      menuItems: [
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
  grid-template-columns: auto auto auto;
  padding: 10px;
  .blog__item {
    transition: 0.3s;
    width: 28%;
    border-radius: 5px;
    height: 400px;
    box-sizing: border-box;

    .blog:hover {
      box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    }

    .blog__image {
      display: flex;
      padding: 30px;
      max-width: 75%;
    }

    .blog__content {
      width: 370px;
      height: 96px;
      font-family: "Jost";
      font-style: normal;
      font-weight: 400;
      font-size: 25px;
      line-height: 130%;
      /* or 32px */
      text-align: center;

      color: #191919;

      /* Inside auto layout */

      flex: none;
      order: 0;
      flex-grow: 0;
    }

    .day__upload {
      width: 370px;
      height: 19px;
      font-family: "Jost";
      font-style: normal;
      font-weight: 400;
      font-size: 13px;
      line-height: 19px;
      text-align: center;
      color: #191919;
      padding-top: 20px;
    }
    .blog__chip {
      padding: 0px 10px;
      gap: 13px;
      text-align: center;
      background: #ffffff;
      border-radius: 55px;
      position: absolute;
      top: 4px;
      left: 4px;
      z-index: 99;
      display: flex;
    }
  }
}
</style>
