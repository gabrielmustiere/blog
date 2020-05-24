<template>
  <div>
    <h2 class="text-xl mb-2">
      <nuxt-link :to="'/article/'+article.uid">
        {{ article.titre }}
      </nuxt-link>
    </h2>
    <div class="flex space-x-4">
      <article-tag v-for="(tag,index) in article.tags" :key="index" :tag="tag" />
    </div>
    <article-contenu :contenu="article.description" />
  </div>
</template>

<script>
import ArticleContenu from './ArticleContenu';
import ArticleTag from './ArticleTag';

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

};
</script>

<style scoped>

</style>
