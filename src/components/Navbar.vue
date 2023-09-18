<template>
  <div class="navbar">
    <div class="navbar-left">
      <img :src="img" alt="navbar" />
      <h2>Minimal</h2>
    </div>
    <div class="navbar-right">
      <icon name="menu" class="navbar-right-icon"></icon>
      <ul>
        <li>process</li>
        <li>projects</li>
        <li>team</li>
        <li>contact</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
  import img from "../assets/IMAGE.png";
</script>

<style lang="scss" scoped>
  .navbar {
    display: flex;
    justify-content: space-around;
    text-align: center;
    align-items: center;
    padding-top: 18px;
  }
  .navbar-left {
    display: flex;
    gap: 18px;
  }
  .navbar-left h2 {
    color: #333;
    font-family: Oswald;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 38px; /* 172.727% */
    text-transform: uppercase;
    padding-top: 15px;
}
  .navbar-right-icon {
    display: none;
  }
  .navbar-right ul {
    display: flex;
    gap: 34px;
  }
  .navbar-right ul li {
    list-style: none;
    color: #404040;
    font-family: Montserrat;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 166.667% */
    text-transform: uppercase;
  }
  @media (max-width: 447px) {
    .navbar-left {
      gap: 28px;
    }
    .navbar-right ul {
      display: none;
    }
    .navbar-right-icon {
      display: flex;
    }
  }
</style>
