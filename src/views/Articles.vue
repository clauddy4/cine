<template>
  <div class="main-container">
    <!--    AAAAARRR-->
    <!--    <ArticleCard-->
    <!--      v-for="item in articles"-->
    <!--      :key="item.id"-->
    <!--      :article="item"-->
    <!--    />-->
    <div class="content">
      <h1 class="content__title">РЕЦЕНЗИИ</h1>
      <div class="content__article-container">
        <ArticleCard v-for="item in articles" :key="item.id" :article="item" />
        <!--        <div class="article">-->
        <!--          <h2 class="article-title">Рецензия маленькая</h2>-->
        <!--          <div class="article-subtitle">-->
        <!--            <p class="article-author">Иван Иванов</p>-->
        <!--            <span class="article-date">20 / 08 / 2021 </span>-->
        <!--          </div>-->
        <!--          <img-->
        <!--            :src="require('@/assets/static/images/article.png')"-->
        <!--            alt="Article image"-->
        <!--            width="400"-->
        <!--            height="220"-->
        <!--            class="article-image"-->
        <!--          />-->
        <!--        </div>-->
        <!--        <div class="article">-->
        <!--          <h2 class="article-title">Я прикольная рецензия читайте меня я вам пригожусь</h2>-->
        <!--          <div class="article-subtitle">-->
        <!--            <p class="article-author">Иван Иванов</p>-->
        <!--            <span class="article-date">20 / 08 / 2021 </span>-->
        <!--          </div>-->
        <!--          <img-->
        <!--            :src="require('@/assets/static/images/article.png')"-->
        <!--            alt="Article image"-->
        <!--            width="400"-->
        <!--            height="220"-->
        <!--            class="article-image"-->
        <!--          />-->
        <!--        </div>-->
        <!--        <div class="article">-->
        <!--          <h2 class="article-title">Рецензия маленькая</h2>-->
        <!--          <div class="article-subtitle">-->
        <!--            <p class="article-author">Иван Иванов</p>-->
        <!--            <span class="article-date">20 / 08 / 2021 </span>-->
        <!--          </div>-->
        <!--          <img-->
        <!--            :src="require('@/assets/static/images/article.png')"-->
        <!--            alt="Article image"-->
        <!--            width="400"-->
        <!--            height="220"-->
        <!--            class="article-image"-->
        <!--          />-->
        <!--        </div>-->
      </div>
    </div>
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
  },
};
</script>

<style scoped lang="scss">
.main-container {
  max-width: 1200px;
  margin: 130px auto;
}

.content {
  padding: 0 15px;
}

.content__title {
  margin-bottom: 70px;
  padding-left: 15px;
  font-weight: bold;
  font-size: 48px;
}

.content__article-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
