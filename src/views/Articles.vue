<template>
  <div class="main-container">
    <!--    AAAAARRR-->
    <!--    <ArticleCard-->
    <!--      v-for="item in articles"-->
    <!--      :key="item.id"-->
    <!--      :article="item"-->
    <!--    />-->
    <div class="content">
      <h1 class="content-title">РЕЦЕНЗИИ</h1>
      <div class="article-container">
        <div class="article">
          <h2 class="article-title">Рецензия маленькая</h2>
          <div class="article-subtitle">
            <p class="article-author">Иван Иванов</p>
            <span class="article-date">20 / 08 / 2021 </span>
          </div>
          <img
            :src="require('@/assets/static/images/article.png')"
            alt="Article image"
            width="400"
            height="220"
            class="article-image"
          />
        </div>
        <div class="article">
          <h2 class="article-title">Я прикольная рецензия читайте меня я вам пригожусь</h2>
          <div class="article-subtitle">
            <p class="article-author">Иван Иванов</p>
            <span class="article-date">20 / 08 / 2021 </span>
          </div>
          <img
            :src="require('@/assets/static/images/article.png')"
            alt="Article image"
            width="400"
            height="220"
            class="article-image"
          />
        </div>
        <div class="article">
          <h2 class="article-title">Рецензия маленькая</h2>
          <div class="article-subtitle">
            <p class="article-author">Иван Иванов</p>
            <span class="article-date">20 / 08 / 2021 </span>
          </div>
          <img
            :src="require('@/assets/static/images/article.png')"
            alt="Article image"
            width="400"
            height="220"
            class="article-image"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//import ArticleCard from "@/components/ArticleCard"
export default {
  name: "Articles",
  components: {
    //ArticleCard
  },
  computed: {
    articles() {
      return this.$store.state.articles;
    },
  },
};
</script>

<style scoped lang="scss">
@mixin font {
  font-family: Roboto, sans-serif;
  font-style: normal;
  line-height: 110%;
  color: #000000;
}
.main-container {
  max-width: 1200px;
  margin: 130px auto;
}
.content {
  padding: 0 15px;
}
.content-title {
  margin-bottom: 70px;
  padding-left: 15px;
  @include font;
  font-weight: bold;
  font-size: 48px;
}
.article-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
.article {
  max-width: 535px;
  height: auto;
  margin-bottom: 60px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 15px;
}
.article-title {
  margin-bottom: 60px;
  @include font;
  font-weight: normal;
  font-size: 36px;
  letter-spacing: -0.1em;
}
.article-subtitle {
  margin-bottom: 60px;
}
.article-author, .article-date {
  @include font;
  font-size: 18px;
  letter-spacing: -0.1em;
  color: #444444;
}
.article-image {
  max-width: 400px;
  max-height: 220px;
  width: 100%;
  height: 100%;
}
@media (max-width: 1024px) {
  .article {
    margin: 0 auto 60px;
  }
}
</style>
