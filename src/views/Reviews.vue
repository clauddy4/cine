<template>
  <div class="main-container">
    <div class="content">
      <h1 class="content__title">Рецензии</h1>
      <ReviewsSection />
    </div>
  </div>
</template>

<script>
import ReviewsSection from "../components/ReviewsSection";

export default {
  name: "Reviews",
  components: {
    ReviewsSection,
  },
  created() {
    // обращаемся к стору, вызываем метод getArticles оттуда, будет нужен, но попозже
    this.$store.dispatch('articles/getReviews')
  }
};
</script>

<style scoped lang="scss">
</style>
