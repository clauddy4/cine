<template>
  <div class="article-add">
    <span class="article-add__title">Добавьте свою статью или рецензию</span>
    <div class="article-add__tabs">
      <span
          v-for="(tab, index) in tabs"
          :key="index"
          @click="selectedTab = tab"
          class="article-add__tab"
          :class="{ 'article-add__tab-active': selectedTab === tab }"
      >
        {{ tab }}
      </span>
    </div>

    <UiInput
        class="article-add__input"
        v-model="title"
        placeholder="Заголовок"
    />

    <textarea
        class="article-add__input"
        v-model="content"
        placeholder="Текст"
    ></textarea>

    <div class="article-add__btn">
      <UiBtn
          @click="addArticle"
          :disabled="!content || !title"
      >
        Добавить
      </UiBtn>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabs: ['Статья', 'Рецензия'],
      selectedTab: 'Статья',
      title: '',
      content: ''
    }
  },
  methods: {
    addArticle() {
      let articleData = {
        "title": this.title,
        "content": this.content,
        "type": this.selectedTab === 'Статья' ? 'Article' : 'Review'
      }

      this.$store.dispatch('articles/addArticle', articleData)
          .then(() => {
            this.$router.push({name: 'Home'});
          })
          .catch((error) => {
            console.log(error)
          });
    }
  }
};
</script>

<style scoped lang="scss">
.article-add {
  margin: 100px auto;

  &__tabs {
    display: flex;
    justify-content: space-between;
    width: 30%;
    margin: 0 auto;
  }

  &__tab {
    cursor: pointer;
    text-transform: uppercase;
    font-size: 24px;
  }

  &__tab-active {
    color: #16C0B0;
    text-decoration: underline;
  }

  &__title {
    text-align: center;
    display: block;
    margin-bottom: 70px;
    padding-left: 15px;
    font-weight: bold;
    font-size: 32px;
    text-transform: uppercase;
  }

  &__input {
    margin: 24px auto;
    width: 80%;
  }

  textarea {
    resize: none;
    display: block;
    width: 80%;
    height: 300px;
    padding: 10px 8px;
    font-weight: 600;
    font-size: 14px;
    border-radius: 4px;
    margin-bottom: 16px;

    &::placeholder {
      color: #444
    }
  }

  &__btn {
    text-align: center;
    text-align: -webkit-center;

    .ui-btn {
      padding: 25px 60px;
      border-radius: 40px;
      font-size: 24px;
    }
  }
}

</style>
