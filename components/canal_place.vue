<template>
  <div>
    <img src="~/assets/images/canal.png" :alt="info.type" />
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
};
</script>

<style>
</style>