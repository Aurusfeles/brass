<template>
  <div class="canal" :style="css_position + css_angle">
    <img src="~/assets/images/canal.png" alt="canal" />
  </div>
</template>

<script>
export default {
  props: {
    town_a: {
      type: Object,
    },
    town_b: {
      type: Object,
    },
  },
  computed: {
    css_position() {
      console.log("position", this.town_a.position, this.town_b.position);
      return (
        "left:" +
        (this.town_a.position.x + this.town_b.position.x) / 2 +
        "px;top:" +
        (this.town_a.position.y + this.town_b.position.y) / 2 +
        "px;"
      );
    },
    vector_1() {
      return {
        x: this.town_a.position.x - this.town_b.position.x,
        y: this.town_a.position.y - this.town_b.position.y,
      };
    },
    vector_2() {
      return { x: 1, y: 0 };
    },
    css_angle() {
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
      let angle;
      if (rad_angle > Math.PI / 2) {
        angle = (rad_angle * 180) / Math.PI + 180;
      } else {
        angle = (rad_angle * 180) / Math.PI;
      }
      console.log("angle", angle);
      return "transform: rotate(" + angle + "deg);";
    },
  },
};
</script>

<style>
.canal {
  position: absolute;
}
</style>