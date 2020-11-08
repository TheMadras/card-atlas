<template>
  <div class="home">
    <div class="parallax-container" :style="{ height: windowHeight + 'px' }">
      <parallax
        :speed-factor="0.5"
        direction="down"
        :parallax="true"
        :fixed="true"
      >
        <div>
          <img src="../../images/parallax-end.jpg" alt="future" style="image" />
        </div>
      </parallax>
      <br />
    </div>
    <div class="foreground-container" :style="{ height: windowHeight + 'px' }">
      <h1>Want to make your credit cards work for you?</h1>
    </div>
    <div class="background-container" :style="{ height: windowHeight + 'px' }">
      <h1>Get more out of your credit card rewards</h1>
    </div>
    <div class="foreground-container" :style="{ height: windowHeight + 'px' }">
      <div class="explanation">
        <h1>Use Card Atlas today</h1>
        <h2>
          Card Atlas helps you maximize your credit card rewards to get your
          money back.
        </h2>
        <b-button class="bg-dark" to="/atlas">
        Try Card Atlas
        </b-button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.parallax-container {
  position: relative;
  height: 1000px;
}
.foreground-container {
  position: relative;
  height: 1000px;
  background-color: white;

  display: flex;
  align-items: center;
  justify-content: center;
  text-shadow: 0px 0px 50px #402039;
}
.background-container {
  position: relative;
  height: 1000px;
  background-color: none;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-shadow: 0px 0px 30px #402039;
}
.parallax-title {
  position: absolute;
  top: 30%;
  left: 0;
  right: 0;
  padding: 20px;
  color: white;
  text-align: center;
}
.image {
  height: 700px;
}
.explanation {
  text-align: center;
}
</style>

<script>
import Parallax from "vue-parallaxy";
export default {
  name: "Home",
  components: {
    Parallax,
  },
  data() {
    return {
      windowHeight: window.innerHeight,
    };
  },
  mounted() {
    window.onresize = () => {
      this.windowHeight = window.innerHeight;
    };
  },
};
</script>
