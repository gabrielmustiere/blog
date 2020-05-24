<template>
  <prismic-rich-text :field="contenu" class="text-gray-700 my-4" />
</template>

<script>
export default {
  name: 'ArticleContenu',
  props: {
    contenu: {
      type: Array,
      required: true
    }
  }

};
</script>
