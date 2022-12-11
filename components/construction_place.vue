<template>
  <div class="place" :style="style">
    <component
      :is="type"
      :info="info"
      style="width: 100%; height: 100%; position: relative"
    ></component>
    <div class="victory_points" :style="verso" :class="flipped">
      {{ victory_points }}
    </div>
    <div class="cubes">
      <div v-for="(k, i) in cubes" :key="i" :class="'cube ' + cube_type"></div>
    </div>
    <div class="level">{{ level }}</div>
    <div class="production" :style="recto">{{ production }}</div>
    <div class="cost" :style="recto">{{ cost }}</div>
  </div>
</template>

<script setup>
const players = usePlayers();
</script>


<script>
import port_place from "~/components/port_place.vue";
import ironworks_place from "~/components/ironworks_place.vue";
import coal_mine_place from "~/components/coal_mine_place.vue";
import cotton_mill_place from "~/components/cotton_mill_place.vue";
import cotton_mill_or_port_place from "~/components/cotton_mill_or_port_place.vue";
import cotton_mill_or_coal_mine_place from "~/components/cotton_mill_or_coal_mine_place.vue";
import shipyard_place from "~/components/shipyard_place.vue";
export default {
  components: {
    port_place,
    shipyard_place,
    cotton_mill_place,
    coal_mine_place,
    ironworks_place,
    cotton_mill_or_port_place,
    cotton_mill_or_coal_mine_place,
  },
  props: {
    info: {
      type: Object,
    },
  },
  computed: {
    type() {
      if (this.info.marker !== undefined) {
        return this.info.marker.type + "_place";
      } else {
        return this.info.type + "_place";
      }
    },
    style() {
      return this.css_color;
    },
    verso() {
      if (this.info.marker !== undefined) {
        return this.info.marker.flipped ? "" : "display:none;";
      }
      return "";
    },
    recto() {
      if (this.info.marker !== undefined) {
        return this.info.marker.flipped ? "display:none;" : "";
      }
      return "";
    },
    cubes() {
      if (this.info.marker !== undefined) {
        return this.info.marker.coal_cubes || this.info.marker.iron_cubes || [];
      }
      return [];
    },
    cube_type() {
      if (this.info.marker !== undefined) {
        if (this.info.marker.coal_cubes !== undefined) {
          return "coal";
        } else if (this.info.marker.iron_cubes !== undefined) {
          return "coal";
        } else {
          return "";
        }
      }
      return "";
    },
    level() {
      return this.info.marker !== undefined ? this.info.marker.level : "";
    },
    production() {
      return this.info.marker !== undefined ? this.info.marker.production : "";
    },
    victory_points() {
      return this.info.marker !== undefined ? this.info.marker.vp : "";
    },
    cost() {
      return this.info.marker !== undefined ? this.info.marker.cost : "";
    },
    css_color() {
      if (this.info.marker === undefined) {
        return "background-color:lightgray";
      }
      return (
        "background-color:" + this.players[this.info.marker.player].color + ";"
      );
    },
  },
};
</script>

<style>
.place {
  position: relative;
  width: 32px;
  height: 32px;
  border: 1px solid black;
  border-radius: 4px;
  margin: 2px 2px;
  padding: 2px 2px;
  font-size: 11px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
}

.place img {
  max-width: 100%;
  max-height: 100%;
}

.victory_points {
  position: absolute;
  background-color: hotpink;
  bottom: 0px;
  right: 0px;
}

.level {
  position: absolute;
  bottom: 0px;
  left: 0px;
}

.production {
  position: absolute;
  top: 0px;
  left: 0px;
}

.cost {
  position: absolute;
  top: 0px;
  right: 0px;
}

.coal {
  background-color: hsl(0deg 0% 30%);
}

.iron {
  background-color: hsl(30deg 80% 80%);
}

.flipped {
  display: inherit;
}

.cubes {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  gap: 2px;
}
.cube {
  width: 10px;
  height: 10px;
}
</style>
