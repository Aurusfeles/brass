<template>
  <div class="town" :style="position">
    <div>{{ info.name }}</div>
    <div class="place_group">
      <ConstructionPlace
        v-for="(place, index) in info.places"
        :key="index"
        :info="place"
      />
    </div>
  </div>
</template>

<script>
import construction_place from "~/components/construction_place.vue";
export default {
  components: {
    construction_place,
  },
  props: {
    info: {
      type: Object,
    },
  },
  computed: {
    position() {
      return `top:${this.info.position.y}px;left:${this.info.position.x}px;`;
    },
  },
};
</script>

<style>
.town {
  position: absolute;
  width: 90px;
}

.place_group {
  display: flex;
  flex-wrap: wrap;
}
</style>