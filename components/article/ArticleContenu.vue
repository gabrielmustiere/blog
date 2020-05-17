<template>
  <div>
    <prismic-rich-text :field="contenu" />
  </div>
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

}
</script>
