<template>
  <div>
    <form class="calculator-form">
      
      <v-select
        :options="['High', 'Medium', 'Low', 'None']"
        v-model="spendingRequirement"
      ></v-select>
      <p>Card Spending Requirement</p>

      <v-select
        :options="[
          'Travel',
          'Restaurant',
          'Grocery',
          'Gas',
          'Amazon',
          'Education',
        ]"
        v-model="spendingType"
      ></v-select>
      <p>Spending Type</p>

      <v-select
        :options="['Flights', 'Hotels', 'Cash', 'Food', 'Discounts', 'Gas']"
        v-model="rewardType"
      ></v-select>
      <p>Desired Rewards Type</p>
    </form>
    <br/>
    <div class="presentation">
      <h1>Your Recommended Cards</h1>
      <div v-if="availableCards.length === 0">
        <h4>Sorry, we can't find any cards matching those requirements.</h4>
      </div>
    </div>

    <div class="wrapper">
      <div class="recommended-cards">
        <div
          class="recommended-card"
          v-for="card in availableCards"
          :key="card.id"
        >
          <div class="company">
            <h3>{{ card.card_company }}</h3>
            
          </div>
          <div class="stripe"></div>
          <div class="about">
            <p><strong>Spending Requirement: </strong>{{ card.spending_requirement }}</p>
            <p><strong>Recommended Spending Type: </strong>{{ card.spending_type }}</p>
            <p><strong>Best Rewards Type: </strong>{{ card.reward_type }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import vSelect from "vue-select";
import Vue from "vue";
Vue.component("v-select", vSelect);
import "vue-select/dist/vue-select.css";
export default {
  name: "Calculator",
  props: {
    cards: Array,
  },
  data() {
    return {
      rewardType: "None",
      spendingRequirement: "None",
      spendingType: "None",
    };
  },
  methods: {
    calculateCards(item) {
      console.log(item);
      this.$root.$data.cards;
    },
  },
  computed: {
    availableCards() {
      return this.$root.$data.cards
        .filter((card) => card.spending_requirement == this.spendingRequirement)
        .filter((card) => card.spending_type == this.spendingType)
        .filter((card) => card.reward_type == this.rewardType);
    },
  },
};
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.presentation {
    text-align: center;
}

.recommended-cards {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.recommended-card {
  margin: 10px;
  margin-top: 50px;
  width: 400px;
  height: 250px;
  background-color: #f2921d;
  border-radius: 6px;
  box-shadow: 5px 10px 8px 2px rgb(49, 48, 48);
  border: darkslategray;
  border-style: solid;
  border-width: .25px;
}

.stripe {
    height: 50px;
    background-color: rgb(96, 104, 104);
    width: 100%;
}

.company {
    margin: 10px;
    text-transform: capitalize;
}

.about {
  display: inline;
  margin: 5px;
}

.about p {
    margin-left: 10px;
}

.auto {
  margin-left: auto;
}

.calculator-form {
    padding-left: 25px;
    padding-right: 25px;
}

</style>