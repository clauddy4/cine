<template>
  <div>
    Детальная страничка статьи
    <h1>{{article.name}}</h1>
  </div>
</template>

<script>
export default {
  name: "ArticleDetail",
  computed: {
    article() {
      return this.$store.state.articles.find(
        (item) => item.id === this.$route.params.id
      );
    },
  }
};
</script>

<style scoped>

</style>