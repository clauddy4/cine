<template>
  <div class="articles">
    <div class="articles__wrap">
      <ArticleCard
          v-for="item in reviews"
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
    reviews() {
      return this.$store.state.articles.reviews;
    },
  },
}
</script>

<style scoped>
.articles__wrap {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
