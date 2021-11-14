<template>
  <div class="main-container">
    <div class="content">
      <h1 class="content__title">Рецензии</h1>
      <ArticlesSection />
    </div>
  </div>
</template>

<script>
// import ArticleCard from "@/components/ArticleCard"
import ArticlesSection from "../components/ArticlesSection";

export default {
  name: "Reviews",
  components: {
    ArticlesSection
    // ArticleCard,
  },
  created() {
    // обращаемся к стору, вызываем метод getArticles оттуда, будет нужен, но попозже
    this.$store.dispatch('articles/getReviews')
  }
};
</script>

<style scoped lang="scss">
</style>
