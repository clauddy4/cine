<template>
  <div class="article">
    <h2 class="article__title">
      <router-link
        class="link article__link"
        :to="{ name: 'ArticleDetail', params: { id: article.id } }"
        >{{ article.title }}</router-link
      >
    </h2>
    <div class="article__subtitle">
      <span class="article__author">{{ article.user.firstName }} {{ article.user.lastName }}</span>
      <span class="article__date">{{ article.createdAt | formatDate}}</span>
    </div>

    <router-link
      class="link"
      :to="{ name: 'ArticleDetail', params: { id: article.id } }"
    >
      <img
        v-if="article.thumbnailImage"
        :src="imagePath"
        alt="Article image"
        width="400"
        height="220"
        class="article__image"
      />
      <img
          v-else
          :src="require('/public/img/no-image.png')"
          alt="Article image"
          width="400"
          height="220"
          class="article__image"
      />
    </router-link>
  </div>
</template>

<script>
//import article from "../store/modules/article";

export default {
  computed: {
    imagePath() {
      return 'https://localhost:5001' + this.article.thumbnailImage;
    }
  },
  name: "ArticleCard",
  props: {
    article: Object,
  },
};
</script>

<style scoped>
.article {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 535px;
  height: auto;
  margin-bottom: 60px;
  flex-grow: 1;
  padding: 0 15px;
}

.article__title {
  margin-bottom: 60px;
  font-weight: normal;
  font-size: 36px;
  line-height: 40px;
  letter-spacing: -1px;
}

.article__link {
  position: relative;
  overflow: hidden;
  background-image: linear-gradient(currentColor, currentColor);
  background-position: 0 100%;
  background-repeat: no-repeat;
  background-size: 0 3px;
  transition: background-size 0.4s;
}

.article__link:hover, .article__link:focus {
  background-size: 100% 3px;
}

.article__subtitle {
  display: flex;
  flex-direction: column;
  margin-bottom: 60px;
}

.article__author,
.article__date {
  font-size: 18px;
  line-height: 20px;
  letter-spacing: -0.1em;
  color: #444444;
}

.article__image {
  min-width: 400px;
  min-height: 220px;
  width: 100%;
  height: 100%;
}

@media (max-width: 1024px) {
  .article {
    margin: 0 auto 60px;
  }
}

@media (max-width: 480px) {
  .article__image {
    min-width: 100%;
    min-height: 100%;
  }
}
</style>
