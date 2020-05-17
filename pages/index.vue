<template>
  <div>
    <template v-for="(article,index) in articles">
      <article-complet :key="index" :article="article" />
      <hr :key="index">
    </template>
  </div>
</template>

<script>
import Article from '../components/article/Article'

export default {
  name: 'Index',
  components: {
    ArticleComplet: Article
  },
  async asyncData ({ $prismic }) {
    const articles = await $prismic.api.query($prismic.predicates.at('document.type', $prismic.api.types.article)).then((response) => {
      return response.results
    })
    return { articles }
  }

}
</script>

<style>
  h1 {
    @apply text-xl my-2
  }
</style>
