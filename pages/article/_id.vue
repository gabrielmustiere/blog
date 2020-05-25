<template>
  <div>
    <img class="" :src="article.data.image.url" :alt="article.data.image.mobile.alt">
    <prismic-rich-text :field="article.data.titre" class="mt-2 underline" />
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
