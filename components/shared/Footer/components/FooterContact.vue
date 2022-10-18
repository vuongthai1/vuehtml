<template>
  <div class="footer__contact">
    <div class="news">
      <p>Join our newsletter and get $20 for your first order</p>
    </div>
    <div class="subcribe">
      <div class="email__address">
        <p>Enter your email</p>
      </div>
      <div class="submit">
        <p>Subcriber</p>
      </div>
    </div>

    <ul class="social">
      <li class="li"><i class="ri-instagram-line"></i></li>
      <li class="li"><i class="ri-instagram-line"></i></li>
      <li class="li"><i class="ri-instagram-line"></i></li>
      <li class="li"><i class="ri-instagram-line"></i></li>
      <li class="li"><i class="ri-instagram-line"></i></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "FooterContact",
};
</script>

<style lang="scss">
.footer__contact {
  padding: 30px 0 0 100px;
}
.news {
  padding-bottom: 20px;
  width: 525px;
  height: 78px;
  p {
    font-family: "Jost";
    font-style: normal;
    font-weight: 500;
    font-size: 30px;
    line-height: 130%;
  }

  color: #191919;
}

.subcribe {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: flex-start;
  padding: 0px;
  gap: 20px;
  font-family: "Jost";
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 25px;
  width: 489px;
  height: 46px;
  .email__address {
    box-sizing: border-box;
    align-items: center;
    padding: 0px 40px;
    gap: 13px;
    width: 380px;
    background: #ffffff;
    border: 1px solid #cccccc;
    border-radius: 55px;
  }
  .submit {
    padding: 0px 40px;
    background: #d9121f;
    color: #ffffff;
    box-sizing: border-box;
    border: 1px solid #cccccc;
    border-radius: 55px;
  }
}

.social {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  li {
    list-style-type: none;
  }
  padding: 20px 0 30px 0;
  width: 200px;
  height: 19px;
}
</style>
