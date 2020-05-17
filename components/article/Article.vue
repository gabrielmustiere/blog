<template>
  <div>
    <article-tag v-for="(tag,index) in article.data.tags" :key="index" :tag="tag" />
    <article-contenu :contenu="article.data.article_contenu" />
  </div>
</template>

<script>
import ArticleContenu from './ArticleContenu'
import ArticleTag from './ArticleTag'

export default {
  name: 'Article',
  components: {
    ArticleContenu,
    ArticleTag
  },
  props: {
    article: {
      type: Object,
      required: true
    }
  }

}
</script>

<style scoped>

</style>
