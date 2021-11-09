<template>
  <div class="main-container">
    <div class="content">
      <h1 class="content__title">РЕЦЕНЗИИ</h1>
      <div v-for="post in posts" :key="post">
        <p>{{post.title}}</p>
      </div>
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
    ArticleCard,
  },
  computed: {
    articles() {
      return this.$store.state.articles;
    }
  },

  data() {
    return {
      posts: [],
    };
  },

  methods: {
    async getData() {
      try {
        const response = await this.$http.get(
            "https://localhost:5001/api/article/new/",
        );
        this.$store.state.articles = response.data;
        console.log(this.articles);
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.getData();
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
