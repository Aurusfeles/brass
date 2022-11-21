<template>
  <div style="width: 100%; height: 100%">
    <img src="~/assets/images/shipyard.png" :alt="info.type" />
  </div>
</template>

<script>
export default {
  props: {
    info: {
      type: Object,
    },
  },
};
</script>

<style>
</style>
