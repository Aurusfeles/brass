<template>
  <div>
    <img src="~/assets/images/cotton_mill.png" :alt="info.type" width="64" />
    <img src="~/assets/images/coal_mine.png" :alt="info.type" width="64" />
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
