<template>
  <div>
    <img src="~/assets/images/cotton_mill.png" :alt="info.type" />
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
