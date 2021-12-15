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
  props: {
    articles: Array
  }
}
</script>

<style scoped>
.articles__wrap {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
