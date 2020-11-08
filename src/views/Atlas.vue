<template>
  <div class="atlas">
    <div class="explanation">
      <h1>Welcome to Card Atlas</h1>
      <p>
        To use Card Atlas, simply fill out the information below. Our specialized algorithm will instantly calculate
        the best credit cards for you.
      </p>
    </div>
    <Calculator :cards="creditCards" />
  </div>
</template>

<style scoped>
.explanation {
  text-align: center;
}
.atlas {
  margin-bottom: 25px;
}
</style>

<script>
import Calculator from "../components/Calculator.vue";
export default {
  name: "Atlas",
  components: {
    Calculator,
  },
  computed: {
    creditCards() {
      return this.$root.$data.cards;
    },
  },
};
</script>