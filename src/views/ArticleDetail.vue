<template>
  <div class="main-container">
    <div class="main-container__article article">
      <h1 class="article__title">{{ article.title }}</h1>
      <div class="article__subtitle">
        <span class="article__author">Иван Иванов</span>
        <span class="article__date">04 / 09 / 2021</span>
      </div>
      <div class="article__content">
        <p class="article__text">
          Когда мы начинаем просмотр «Теней» Кассаветиса, мы оказываемся в
          странном пространстве: нас сразу выбрасывает в гущу событий, на
          джазовую вечеринку. Резкий быстрый монтаж, крупные планы, перед нами
          мелькают лица, фигуры, детали, играет музыка — тусовка в самом
          разгаре. История не имеет начала, она просто длится, а мы лишь
          попадаем именно в это мгновение, будто случайно заглядываем в один из
          нью-йоркских баров, и пытаемся по доносящимся обрывкам и кусочкам
          собрать рассказ. После первой сцены градус этой «странности» не
          снижается. На протяжении всего фильма мы погружены в особого рода
          среду, нарративную среду. С похожим зрительским опытом можно
          столкнуться при просмотре картины Питера Голдмана «Отзвуки тишины»,
          которая состоит из безмолвных переглядок и бесцельных прогулок героев.
          Что эта за среда, в которую мы попадаем при просмотре таких фильмов? С
          каким нарративом мы встречаемся? Эти картины можно рассматривать как
          воплощение гидеборовской концепции дрейфа. При этом зритель не просто
          наблюдает дрейф со стороны, а посредством определенных техник
          становится участником процесса. Помимо того, что дрейф разворачивается
          в самих фильмах (как нарративная основа), зрителю также представляется
          возможность пережить свой ситуационистский опыт.
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
      return this.$store.state.articles.find(
        (item) => item.id === this.$route.params.id
      );
    },
  },
};
</script>

<style scoped>
.main-container {
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
