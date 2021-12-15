<template>
  <div class="main-container">
    <div class="content">
      <h1 class="content__title">Статьи</h1>
      <ArticlesSection :articles="articles" />
    </div>
  </div>
</template>

<script>
import ArticlesSection from "../components/ArticlesSection";

export default {
  name: "Articles",
  components: {
    ArticlesSection
  },
  computed: {
    articles() {
      return this.$store.state.articles.articles;
    },
  },
  created() {
    this.$store.dispatch('articles/getArticles')
  }
};
</script>

<style scoped lang="scss">
.content__title {
  margin-bottom: 70px;
  padding-left: 15px;
  font-weight: bold;
  font-size: 48px;
  text-transform: uppercase;
}

.content__article-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
