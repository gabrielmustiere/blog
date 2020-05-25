<template>
  <div>
    <input
      v-model="recherche"
      class="w-full px-4 py-2 leading-tight text-gray-700 bg-gray-200 border-2 border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-teal-500"
      type="text"
      placeholder="Filtrer"
    >
    <hr class="mt-4">
    <div class="flex flex-col divide-y">
      <div v-for="article in articlesFilterd" :key="article.id" class="flex flex-row">
        <div class="flex mt-4 mr-2">
          <img class="h-24 w-24" :src="article.data.image.vignette.url" :alt="article.data.image.mobile.alt">
        </div>
        <div class="flex-1 flex-col">
          <nuxt-link :to="{ name: 'article-id', params: { id: article.uid } }">
            <prismic-rich-text :field="article.data.titre" class="mt-2 underline" />
          </nuxt-link>
          <prismic-rich-text :field="article.data.description" class="mt-1 mb-3 text-justify" />
          <div class="flex flex-row flex-no-wrap items-center justify-between">
            <div class="flex space-x-1 mb-3">
              <article-tag v-for="tag in article.data.tags" :key="tag.tag.id" :tag="tag.tag" />
            </div>
            <span class="text-xs text-gray-500">
              Publié le {{ formatDate(article.first_publication_date) }}
              <template v-if="article.first_publication_date !== article.last_publication_date">
                (mis à jour le {{ formatDate(article.last_publication_date) }})
              </template>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { format } from 'date-fns';
import ArticleTag from '../components/article/ArticleTag';

export default {
  name: 'Articles',
  components: { ArticleTag },
  async asyncData ({ $prismic }) {
    const graphQuery = `
    {
      article {
        titre
        description
        contenu
        image
        tags {
          tag {
            titre
          }
       }
      }
    }
    `;
    const articles = await $prismic.api.query(
      [
        $prismic.predicates.at('document.type', 'article')
      ],
      { graphQuery, orderings: '[document.first_publication_date desc]' }
    );

    return { articles: articles.results };
  },
  data () {
    return {
      articles: [],
      recherche: ''
    };
  },
  computed: {
    articlesFilterd () {
      const articles = [];

      this.articles.forEach((article) => {
        let match = false;

        article.data.tags.forEach((tag) => {
          this.recherche.split(' ').forEach((fragment) => {
            if (match || tag.tag.data.titre.toUpperCase().includes(fragment.toUpperCase())) {
              match = true;
            }
          });
        });

        if (match) {
          articles.push(article);
        }
      });
      return articles;
    }
  },
  methods: {
    formatDate (dateString) {
      return format(Date.parse(dateString), 'dd/LL/y');
    }
  }
};
</script>

<style>
  h1 {
    @apply text-2xl text-gray-900
  }

  p {
    @apply text-gray-700
  }
</style>
