<template>
  <div
    class="article-card"
  >
    <h2> {{article.name}} </h2>
    <h3> {{article.description}} </h3>
    <router-link :to="{ name: 'ArticleDetail', params: {id: article.id} }">Читать далее</router-link>

  </div>
</template>

<script>
export default {
  name: "ArticleCard",
  props: {
    article: Object
  }
};
</script>

<style scoped>

</style>