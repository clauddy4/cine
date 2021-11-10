<template>
  <div class="articles">
    <div class="articles__wrap">
      <ArticleCard
          v-for="item in articles"
          :key="item.id"
          :article="item"
      />
    </div>
  </div>
</template>

<script>
import ArticleCard from "@/components/ArticleCard"

export default {
  components: {
    ArticleCard
  },
  computed: {
    articles() {
      return this.$store.state.articles.articles;
    },
  },
  created() {
    // обращаемся к стору, вызываем метод getArticles оттуда, будет нужен, но попозже
    // this.$store.dispatch('articles/getArticles')
  }
}
</script>

<style lang="scss" scoped>
.articles {
  &__wrap {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
}
</style>
