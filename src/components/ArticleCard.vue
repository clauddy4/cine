<template>
  <!--  <div-->
  <!--    class="article-card"-->
  <!--  >-->
  <!--    <h2> {{article.name}} </h2>-->
  <!--    <h3> {{article.description}} </h3>-->
  <!--    <router-link :to="{ name: 'ArticleDetail', params: {id: article.id} }">Читать далее</router-link>-->

  <!--  </div>-->
  <div class="article">
    <h2 class="article__title">
      <router-link
        class="link article__link"
        :to="{ name: 'ArticleDetail', params: { id: article.id } }"
        >{{ article.name }}</router-link
      >
    </h2>
    <div class="article__subtitle">
      <p class="article__author">Иван Иванов</p>
      <span class="article__date">20 / 08 / 2021 </span>
    </div>
    <router-link
      class="link"
      :to="{ name: 'ArticleDetail', params: { id: article.id } }"
    >
      <img
        :src="require('@/assets/static/images/article.png')"
        alt="Article image"
        width="400"
        height="220"
        class="article__image"
      />
    </router-link>
  </div>
</template>

<script>
export default {
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
  display: inline-block;
  position: relative;
  overflow: hidden;
}

.article__link:after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background-color: #000000;
  opacity: 0;
  transition: opacity 300ms, transform 300ms;
  transform: translate3d(-100%, 0, 0);
}

.article__link:hover::after,
.article__link:focus::after {
  opacity: 1;
  transform: translate3d(0, 0, 0);
}

.article__subtitle {
  margin-bottom: 60px;
}

.article__author,
.article__date {
  font-size: 18px;
  letter-spacing: -0.1em;
  color: #444444;
}

.article__image {
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
