<template>
  <div class="home wrap">
    <h1>Новое</h1>
    <h2>Статьи</h2>
    <ArticlesSection />
    <ReviewsSection />
  </div>
</template>

<script>
import ArticlesSection from "../components/ArticlesSection"
import ReviewsSection from "../components/ReviewsSection";

export default {
  components: {
    ReviewsSection,
    ArticlesSection
  }
}
</script>


<style scoped lang="scss">
.wrap {
  max-width: 1170px;
  margin: 0 auto;
  padding: 130px 80px;
}
</style>
