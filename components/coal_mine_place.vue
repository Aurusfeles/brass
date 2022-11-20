<template>
  <div>
    <img src="~/assets/images/coal_mine.png" :alt="info.type" />
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
