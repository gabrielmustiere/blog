<template>
  <div>Description</div>
</template>

<script>
export default {
  name: 'ArticleDescription',
  props: {
    description: Object,
    default: {},
    required: () => {
      return true;
    }
  }
};
</script>

<style scoped>

</style>
