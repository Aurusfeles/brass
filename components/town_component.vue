<template>
  <div class="place_group">
    <ConstructionPlace
      v-for="(place, index) in info"
      :key="index"
      :info="place"
    />
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
};
</script>

<style>
.place_group {
  display: flex;
}
</style>