<template>
  <div>
    AAAAARRR
    <ArticleCard
      v-for="item in articles"
      :key="item.id"
      :article="item"
    />

  </div>
</template>

<script>
import ArticleCard from "@/components/ArticleCard"
export default {
  name: "Articles",
  components: {
    ArticleCard
  },
  computed: {
    articles() {
      return this.$store.state.articles;
    },
  }
};
</script>

<style scoped>

</style>