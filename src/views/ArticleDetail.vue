<template>
  <div class="detail-container">
    <div class="detail-container__article article">
      <h1 class="article__title">{{ article.title }}</h1>
      <div class="article__subtitle">
<!--       почему-то ругается на имя и фамилию автора-->
        <span class="article__author">{{ article.author.name }} {{ article.author.lastname }}</span>
        <span class="article__date">{{ article.createdAt | formatDate }}</span>
      </div>
      <div class="article__content">
        <p class="article__text">
          {{ article.content }}
        </p>
      </div>
    </div>
    <Share />
  </div>
</template>

<script>
import Share from "../components/Share";

export default {
  name: "ArticleDetail",
  components: {
    Share,
  },
  computed: {
    article() {
      return this.$store.state.article.article;
    },
  },
  created() {
    this.$store.dispatch('article/getArticle', [this.$route.params.id]);
  }
};
</script>

<style scoped>
.detail-container {
  max-width: 1000px;
  width: 100%;
  margin: 130px auto;
}

.article {
  padding: 0 30px;
}

.article__title {
  margin-bottom: 20px;
  font-size: 36px;
  line-height: 40px;
  letter-spacing: -0.01em;
}

.article__subtitle {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 50px;
}

.article__content {
  margin-bottom: 100px;
}

.article__text {
  font-size: 20px;
  line-height: 22px;
}
</style>
