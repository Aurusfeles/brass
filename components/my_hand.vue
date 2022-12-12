<template>
  <div>
    <div class="hand">
      <div
        class="card"
        v-for="(card, index) in content"
        :key="index"
        @click="card_click(card)"
      >
        {{ card.type == "location" ? card.location : card.building }}
      </div>
    </div>
    <div class="possibilities">
      <div v-for="(v, k) in possibilities" :key="k">
        {{ v }}
      </div>
    </div>
  </div>
</template>

<script setup>
const towns = useTowns();
const players = usePlayers();
</script>

<script>
export default {
  data() {
    return {
      possibilities: [],
    };
  },
  props: {
    content: {
      type: Array,
    },
  },
  methods: {
    card_click(card) {
      this.possibilities.push(this.build_possibilities(card));
    },
    build_possibilities(card) {
      console.log(card);
      if (card.type == "location") {
        return this.build_possibilities_for_location(card.location);
      } else {
        return this.build_possibilities_for_building(card.building);
      }
    },
    build_possibilities_for_location(location) {
      let town = this.towns[location];
      for
    },
    build_possibilities_for_building(building) {},
  },
};
</script>

<style>
.hand {
  display: flex;
}
.card {
  padding: 3px 3px;
  width: 100px;
  height: 150px;
  border: 1px solid black;
  border-radius: 4px;
  margin: 3px 3px;
}
</style>