<template>
  <div class="box-main">
    <div class="box">
      <h1>Recent projects</h1>
      <div class="box-3-line"></div>
      <div class="box-items">
        <div class="box-item-1">
          <img :src="img1" alt="image" />
          <h1>Woods</h1>
          <p>Photography</p>
        </div>
        <div class="box-item-1">
          <img :src="img2" alt="image" />
          <h1>path</h1>
          <p>Website • Photography</p>
        </div>
        <div class="box-item-1">
          <img :src="img3" alt="image" />
          <h1>darkness</h1>
          <p>Website</p>
        </div>
        <div class="box-item-1">
          <img :src="img4" alt="image" />
          <h1>waves</h1>
          <p>Photography</p>
        </div>
        <div class="box-item-1">
          <img :src="img5" alt="image" />
          <h1>drops</h1>
          <p>Website</p>
        </div>
        <div class="box-item-1">
          <img :src="img6" alt="image" />
          <h1>ocean</h1>
          <p>Website</p>
        </div>
        <div class="box-item-1">
          <img :src="img7" alt="image" />
          <h1>town</h1>
          <p>Website</p>
        </div>
        <div class="box-item-1">
          <img :src="img8" alt="image" />
          <h1>mountain</h1>
          <p>Website</p>
        </div>
        <div class="box-item-1 alone">
          <img :src="img9" alt="image" />
          <h1>camera</h1>
          <p>Website</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import img1 from "../assets/IMAGE (1).png";
  import img2 from "../assets/IMAGE (6).png";
  import img3 from "../assets/IMAGE (7).png";
  import img4 from "../assets/IMAGE (8).png";
  import img5 from "../assets/IMAGE (9).png";
  import img6 from "../assets/IMAGE (10).png";
  import img7 from "../assets/IMAGE (11).png";
  import img8 from "../assets/IMAGE (12).png";
  import img9 from "../assets/IMAGE (13).png";
</script>

<style lang="scss" scoped>
  .box-main {
    background: #f5f5f5;
  }
  .box {
    width: 940px;
    margin: 69px auto;
    padding: 69px 20px;
  }
  .box h1 {
    font-size: 23px;
    line-height: 36px;
  }
  .box-items {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
  .box-item-1 {
    width: calc(33% - 20px);
    background: #fff;
  }
  .box-item-1 img {
    width: 100%;
    margin-bottom: 19px;
    object-fit: cover;
  }
  .box-item-1 h1,
  p {
    font-size: 16px;
    line-height: 20px;
  }
  p {
    margin-bottom: 21px;
  }
  @media (max-width: 447px) {
    .box-main {
      margin-top: 600px;
    }
    .box {
      width: 100%;
    }
    .box-item-1 {
      width: calc(50% - 20px);
    }
    .box-item-1 h1,
    p {
      font-size: 12px;
      line-height: 16px;
    }
    .alone {
        margin: 0px auto;
    }
  }
</style>
