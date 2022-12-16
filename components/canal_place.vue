<template>
  <div class="canal" :style="css_position + css_angle + css_color">
    <img src="~/assets/images/canal.png" alt="canal" />
  </div>
</template>

<script setup>
const towns = useTowns();
const players = usePlayers();
</script>

<script lang="ts">
export default {
  props: {
    info: {
      type: Object,
    },
  },
  computed: {
    css_color() {
      if (this.info.player === undefined) {
        return "";
      }
      return "background-color:" + this.players[this.info.player].color + ";";
    },
    town_a() {
      return this.towns[this.info.link[0]];
    },
    town_b() {
      return this.towns[this.info.link[1]];
    },
    css_position() {
      if (this.town_a === undefined || this.town_b === undefined) {
        return "";
      }
      console.log("position", this.town_a.position, this.town_b.position);
      return (
        "left:" +
        (16 + (this.town_a.position.x + this.town_b.position.x) / 2) +
        "px;top:" +
        (16 + (this.town_a.position.y + this.town_b.position.y) / 2) +
        "px;"
      );
    },
    vector_1() {
      if (this.town_a === undefined || this.town_b === undefined) {
        return { x: 0, y: 0 };
      }
      return {
        x: this.town_a.position.x - this.town_b.position.x,
        y: this.town_a.position.y - this.town_b.position.y,
      };
    },
    vector_2() {
      return { x: 1, y: 0 };
    },
    css_angle() {
      if (this.town_a === undefined || this.town_b === undefined) {
        return "";
      }

      let rad_angle = Math.acos(
        (this.vector_1.x * this.vector_2.x +
          this.vector_1.y * this.vector_2.y) /
          (Math.sqrt(
            this.vector_1.x * this.vector_1.x +
              this.vector_1.y * this.vector_1.y
          ) *
            Math.sqrt(
              this.vector_2.x * this.vector_2.x +
                this.vector_2.y * this.vector_2.y
            ))
      );
      let angle = -(rad_angle * 360) / (Math.PI * 2);
      if (this.town_a.position.y > this.town_b.position.y) {
        angle = -angle;
      }

      console.log(this.town_a.name, this.town_b.name, angle);
      return "transform: rotate(" + angle + "deg);";
    },
  },
};
</script>

<style>
.canal {
  position: absolute;
  border: 1px solid black;
  border-radius: 4px;
}
</style>