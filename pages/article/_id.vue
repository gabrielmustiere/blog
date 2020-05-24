<template>
  <div>
    <div class="text-4xl" v-html="$prismic.asHtml(article.data.titre)" />
    <div v-html="$prismic.asHtml(article.data.description)" />
    <div v-html="$prismic.asHtml(article.data.contenu)" />
  </div>
</template>

<script>

export default {

  async asyncData ({ params, $prismic }) {
    const article = await $prismic.api.getByUID('article', params.id);
    return { article };
  }

};
</script>

<style lang="scss">
  p {
    @apply my-2;
  }
</style>
