<template>
  <div class="main-container">
    <div class="content">
      <div class="content__author">
        <h1 class="content__title">{{author.firstName}} {{author.lastName}}</h1>
        <span class="content__logout" @click="logout">выход</span>
      </div>
      <router-link class="content__add-button" :to="{ name: 'ArticleAdd' }">Добавить запись</router-link>

      <div class="lists">
        <ul class="tabs">
          <li
              v-for="(tab, index) in tabs"
              :key="index"
              @click="selectedTab = tab"
              class="tab"
              :class="{ 'active': selectedTab === tab }"
          >
            {{ tab }}
          </li>
        </ul>

        <ArticlesList v-if="selectedTab === tabs[0]" :articles="articles"/>
        <ArticlesList v-if="selectedTab === tabs[1]" :articles="reviews"/>
      </div>
    </div>
  </div>
</template>

<script>
import ArticlesList from "../components/ArticlesList";

export default {
  name: "Articles",
  components: {
    ArticlesList
  },
  data() {
    return {
      tabs: ['Мои статьи', 'Мои рецензии'],
      selectedTab: 'Мои статьи',
    }
  },
  computed: {
    articles() {
      return this.$store.state.articles.articles;
    },
    reviews() {
      return this.$store.state.articles.reviews;
    },
    author() {
      return this.$store.state.articles.author;
    }
  },
  created() {
    this.$store.dispatch('articles/getArticlesByAuthor')
  },
  methods: {
    logout() {
      this.$store.dispatch('auth/logout')
          .then(() => {
            this.$router.push({name: 'Home'});
            window.location.reload();
          })
    }
  }
};
</script>

<style scoped lang="scss">
.content__author {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 50px;
}

.content__title {
  margin: 0;
  padding-left: 0;
  font-family: Rubik, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 38px;
  line-height: 110%;
  letter-spacing: -0.01em;
  color: #000000;
  text-transform: unset;
}

.content__logout {
  margin-right: 0;
  margin-left: auto;
  font-family: Rubik, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 110%;
  letter-spacing: -0.08em;
  color: #444444;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
}

.content__article-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}

.content__add-button {
  display: block;
  max-width: fit-content;
  margin-left: 0;
  margin-right: auto;
  margin-bottom: 50px;
  border: none;
  outline: none;
  cursor: pointer;
  background: #112877;
  padding: 9px 52px;
  color: #F1ECFF;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 110%;
  letter-spacing: -0.09em;
  text-decoration: none;

  &:hover {
    background: #1737a4;
  }
}

.tabs {
  padding: 0;
  list-style: none;
  display: flex;
  margin: 0;
  margin-bottom: 20px;
}

.tab.active {
  text-decoration: none;
  cursor: default;
  color: #000000;
  background: #F7F7F7;
}

.tab {
  cursor: pointer;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 238px;
  width: 100%;
  margin-right: 8px;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 110%;
  text-align: center;
  letter-spacing: -0.08em;
  color: #868686;
  background: #EBEBEB;
}

.tab:last-child {
  margin-right: 0;
}

.tab:hover {
  color: #000000;
  background: #F7F7F7;
}

</style>
