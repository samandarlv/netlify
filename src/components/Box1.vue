<template>
  <div class="box">
    <div class="box-1">
      <div class="box-1-text">
        <h1>Making brands stand out</h1>
        <h1>is our obsession</h1>
        <div class="box-1-line"></div>
        <p>Let us help your brand stand out.</p>
      </div>
    </div>
    <div class="box-2">
      <div class="box-2-item">
        <p>
          Minimalist is a full-service digital creative agency located in
          Ontorio Canada. We focus on design, consulting, technology, and
          photography. We’ve been building unique digital products, platforms,
          and experiences for the past 6 years. Let us help your company grow.
        </p>
        <button>Get in Touch</button>
      </div>
    </div>
    <div class="box-3">
      <div class="box-3-item">
        <h1>How we make brands thrive</h1>
        <div class="box-3-line"></div>
        <div class="box-3-cards">
          <div class="box-3-card">
            <div class="box-3-card-img">
              <img :src="img" alt="image" />
            </div>
            <h1>Set a Tagret</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </p>
          </div>
          <div class="box-3-card">
            <div class="box-3-card-img">
              <img :src="img2" alt="image" />
            </div>
            <h1>design a solution</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </p>
          </div>
          <div class="box-3-card">
            <div class="box-3-card-img">
              <img :src="img3" alt="image" />
            </div>
            <h1>track the progress</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import img from "../assets/IMAGE (3).png";
  import img2 from "../assets/IMAGE (4).png";
  import img3 from "../assets/IMAGE (5).png";
</script>
<style lang="scss" scoped>
  .box-1 {
    margin-top: 18px;
    width: 100%;
    background-image: url("../assets/IMAGE\ \(2\).png");
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
  }
  .box-1-text {
    flex-shrink: 0;
    padding: 98px 0 50px 0;
  }
  .box-1-text h1 {
    color: #fff;
    font-size: 44px;
  }
  .box-1-line {
    width: 80px;
    height: 2px;
    flex-shrink: 0;
    background: #fff;
    margin: 28px auto;
  }
  .box-2 {
    background: #fefec9;
  }
  .box-2-item {
    width: 85%;
    margin-left: 8%;
    padding: 60px 250px;
    color: #47474f;
    text-align: center;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 25px; /* 138.889% */
  }
  .box-2-item button {
    width: 159px;
    height: 53px;
    flex-shrink: 0;
    margin-top: 40px;
    font-size: 16px;
  }
  .box-3 {
    width: 100%;
  }
  .box-3-item {
    width: 940px;
    flex-shrink: 0;
    margin: 69px auto;
  }
  .box-3-item h1 {
    padding: 10px 273px;
    font-size: 23px;
    line-height: 36px; /* 156.522% */
  }
  .box-3-cards {
    display: flex;
    justify-content: center;
    gap: 10px;
  }
  .box-3-card {
    width: calc(33% - 10px);
  }
  .box-3-card-img {
    background: #f5f5f5;
  }
  .box-3-card-img img {
    padding: 50px 86px;
  }
  .box-3-card h1 {
    font-size: 16px;
    line-height: 20px;
    padding: 38px;
  }
  .box-3-card p {
    font-size: 15px;
    line-height: 22px;
  }
  @media (max-width: 769px) {
    .box-2-item {
      padding: 60px 10px;
    }
    .box-3-cards {
      flex-wrap: wrap;
    }
    .box-3-card {
      width: calc(50% - 10px);
    }
    .box-3-item {
      width: 100%;
    }
    .box-3-item h1 {
      font-size: 18px;
      line-height: normal;
    }
  }
  @media (max-width: 447px) {
    .box-1-text {
      width: 100%;
      padding-left: 20px;
    }
    .box-1-text h1 {
      font-size: 26px;
    }
    .box-1-text p {
      font-size: 18px;
    }
    .box-2-item {
      padding: 20px 0px;
    }
    .box-3-cards {
      flex-direction: column;
      width: 100%;
      padding: 20px;
    }
    .box-3-item {
      width: 100%;
    }
    .box-3-item h1 {
      padding: 10px;
    }
    .box-3-card {
      width: 100%;
    }
  }
</style>
