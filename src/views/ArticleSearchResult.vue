<template>
  <div class="main-container">
    <div class="content search">
      <h1 class="visually-hidden">Результаты поиска по запросу:</h1>
      <p class="search__request">{{this.$route.params.name}}</p>
      <span class="search__number">Всего найдено: {{articlesCount}}</span>
      <ArticlesSection :articles="this.$route.params.articles" />
    </div>
  </div>
</template>

<script>
import ArticlesSection from "../components/ArticlesSection";

export default {
  name: "ArticleSearchResult",
  components: {
    ArticlesSection
  },
  computed: {
    articles() {
      return this.$store.state.articles.articles;
    },
    articlesCount() {
      return this.$store.state.articles.articles.length;
    }
  },
  // created() {
  //   this.$store.dispatch('articles/search', [this.$route.params.name])
  //     .catch((error) => {
  //       console.log(error)
  //     });
  // },
  // beforeMount() {
  //   console.log(this.articlesCount);
  //   this.$store.dispatch('articles/search', [this.$route.params.name])
  //       .catch((error) => {
  //         console.log(error)
  //       });
  // },
  destroyed() {
    let searchBlock = document.getElementById('search-block');
    searchBlock.style.visibility = 'hidden';
    searchBlock.style.opacity = '0';
    document.getElementsByClassName('site-navigation')[0].style.display = 'flex';
  }
}
</script>

<style scoped>
  .search__title {
    text-transform: uppercase;
  }

  .search__request {
    font-size: 40px;
    text-transform: uppercase;
    border-bottom: 2px solid;
    padding-bottom: 10px;
    margin-bottom: 10px;
  }

  .search__number {
    display: block;
    font-size: 20px;
    margin-bottom: 50px;
  }
</style>