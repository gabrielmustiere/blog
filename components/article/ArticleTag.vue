<template>
  <span class="px-2 py-1 bg-teal-500 text-white rounded text-xs font-medium uppercase">
    #{{ tag.data.titre }}
  </span>
</template>

<script>
export default {
  name: 'ArticleTag',
  props: {
    tag: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>

</style>
