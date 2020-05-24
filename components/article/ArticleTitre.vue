<template>
  <div>
    Titre
  </div>
</template>

<script>
export default {
  name: 'ArticleTitre',
  props: {
    titre: Object,
    default: {},
    required: () => {
      return true;
    }
  }
};
</script>

<style scoped>

</style>
