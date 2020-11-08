<template>
  <div class="about">
    <div class="content page">
      <div class="content intro">
        <div class="text-box">
          <h1>About Us</h1>
          <p class="lead">
            Card Atlas is your partner in making your credit cards work for you. Using AI and machine learning,
            our Atlas tool is the map to help you get the most from your credit card rewards.
            <br />
            <br />

            Start making your credit cards work for you today! Try Card Atlas!
          </p>
        </div>
      </div>
      

      <div class="content intro-photo">
        <img class="d-block w-50" src="/images/logo.png" alt="logo" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.content {
  flex: 1 0 auto;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.page {
  display: flex;
  flex-wrap: wrap;
  padding-top: 1em;
  padding-bottom: 1em;
  padding-left: 1em;
  padding-right: 1em;
}
.intro,
.intro-photo {
  width: 50%;
}
</style>

<script>
export default {
  name: "About",
};
</script>
