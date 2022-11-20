<template>
  <div>
    hey
    <img src="~/assets/images/ironworks.png" :alt="info.type" />
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
