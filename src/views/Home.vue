<template>
  <div class="main-container">
    <div class="content">
      <h1 class="content__title">Новое</h1>
      <h2 class="content__section-title">
        <router-link class="content__section-link" :to="{ name: 'Articles' }">Статьи</router-link>
      </h2>
      <ArticlesSection />
      <h2 class="content__section-title">
        <router-link class="content__section-link" :to="{ name: 'Reviews' }">Рецензии</router-link>
      </h2>
      <ReviewsSection />
    </div>
  </div>
</template>

<script>
import ArticlesSection from "../components/ArticlesSection"
import ReviewsSection from "../components/ReviewsSection";

export default {
  components: {
    ReviewsSection,
    ArticlesSection
  },
  created() {
    // обращаемся к стору, вызываем метод getArticles оттуда, будет нужен, но попозже
    this.$store.dispatch('articles/getNew')
  }
}
</script>

<style scoped lang="scss">
.content__section-title {
  margin-top: 0;
  margin-bottom: 40px;
  padding-left: 15px;
  font-size: 42px;
  line-height: 110%;
  letter-spacing: -3px;
  text-decoration-line: underline;
  text-transform: uppercase;
  color: #000000;
}

.content__section-link {
  color: #000000;
  font-weight: normal;
}
</style>
