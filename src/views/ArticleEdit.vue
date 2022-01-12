<template>
  <div class="article-add container">
    <h1 class="article-add__title">{{article.category.name}}: редактирование</h1>

    <div class="article-add__input-container">
      <input
          id="input-title"
          class="article-add__input article-add__input-title"
          v-model="article.title"
      />

      <textarea
          id="input-text"
          class="article-add__input"
          v-model="article.content"
      ></textarea>

      <div class="article-add__image">
        <span>Загрузите картинку:</span>
        <input id="input-image" type="file" accept="image/*">
      </div>

<!--      <div class="article-add__choice">-->
<!--        <span>Выберите раздел:</span>-->
<!--        <ul>-->
<!--          <li-->
<!--              @click="selectedTab = 'Статья'"-->
<!--              class="article-add__tab"-->
<!--              :class="{ 'article-add__tab-active': articleType === 'Статья' }"-->
<!--          >-->
<!--            Статья-->
<!--          </li>-->
<!--          <li-->
<!--              @click="selectedTab = 'Рецензия'"-->
<!--              class="article-add__tab"-->
<!--              :class="{ 'article-add__tab-active': articleType === 'Рецензия' }"-->
<!--          >-->
<!--            Рецензия-->
<!--          </li>-->
<!--        </ul>-->
<!--      </div>-->
    </div>

    <div class="article-add__buttons">
      <div class="article-add__btn">
        <UiBtn
          @click="editArticle"
        >
          Сохранить
        </UiBtn>
      </div>
      <div class="article-add__btn article-add__btn-cancel">
        <UiBtn
        >
          Отменить
        </UiBtn>
      </div>

      <div class="article-add__btn article-add__btn-delete">
        <UiBtn
            id="btn-delete"
            @click="showModal"
        >
          Удалить
        </UiBtn>
      </div>
    </div>
    <div id="modal-delete" class="modal">
      <!-- Modal content -->
      <div class="modal-content">
        <p>Вы уверены, что хотите удалить запись?</p>
        <div class="modal-buttons">
          <UiBtn
              class="modal-delete"
              @click="deleteArticle"
          >
            Удалить
          </UiBtn>
          <UiBtn
              id="close"
              class="modal-cancel"
              @click="hideModal"
          >
            Отменить
          </UiBtn>
        </div>
      </div>

    </div>
  </div>

  <!-- The Modal -->

</template>

<script>
export default {
  computed: {
    article() {
      return this.$store.state.article.article;
    }
  },
  created() {
    this.$store.dispatch('article/getArticle', [this.$route.params.id]);
  },

  methods: {
    editArticle() {
      let articleData = {
        id: this.article.id,
        title: this.article.title,
        content: this.article.content,
        createdAt: this.article.createdAt,
        type: this.article.category.type,
        thumbnailImage: this.article.thumbnailImage,
        image: this.article.image
      }

      this.$store.dispatch('articles/editArticle', articleData)
          .then(() => {
            this.$router.push({name: 'ArticlesAuthorList'});
          })
          .catch((error) => {
            console.log(error)
          });
    },

    deleteArticle() {
      this.$store.dispatch('articles/deleteArticle', this.article.id)
          .then(() => {
            this.$router.push({name: 'ArticlesAuthorList'});
          })
          .catch((error) => {
            console.log(error)
          });
    },

    showModal() {
      var modal = document.getElementById("modal-delete");
      modal.style.display = "flex";
    },
    hideModal() {
      var modal = document.getElementById("modal-delete");
      modal.style.display = "none";
    }
  }
};

// window.onload = function(){
//   var modal = document.getElementById("modal-delete");
//
//   var deleteBtn = document.getElementById("btn-delete");
//
//   var closeBtn = document.getElementById("close");
//
//   deleteBtn.onclick = function() {
//     modal.style.display = "flex";
//   }
//
//   closeBtn.onclick = function() {
//     modal.style.display = "none";
//   }
//
//   window.onclick = function(event) {
//     if (event.target === modal) {
//       modal.style.display = "none";
//     }
//   }
// };

</script>

<style scoped lang="scss">
.article-add {
  width: unset;
  margin: 130px auto;

  &__tabs {
    display: flex;
    justify-content: space-between;
    width: 30%;
    margin: 0 auto;
  }

  &__tab {
    cursor: pointer;
    font-size: 18px;
  }

  &__title {
    display: block;
    margin-bottom: 50px;
    font-family: Rubik, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 28px;
    line-height: 110%;
  }

  &__input-container {
    display: flex;
    flex-direction: column;
    margin-bottom: 50px;

    .article-add__input-title {
      height: 23px;
      margin-bottom: 40px;
      padding: 10px 8px;
      border-radius: 4px;
      width: 95%;
      max-width: 100%;
      box-shadow: none;
      border: 2px solid #444444;
      font-family: Roboto, sans-serif;
      font-size: 16px;

      &:focus-visible {
        outline: none;
      }

      &::placeholder {
        color: #444
      }

      &__focused {
        box-shadow: 0 0 0 1px #112877;
        background: #F0FDFF;
      }
    }
  }

  &__input {
    width: 95%;
    max-width: 100%;
    box-shadow: none;
    border: 2px solid #444444;
  }

  textarea {
    resize: none;
    display: block;
    width: 95%;
    height: 300px;
    padding: 10px 8px;
    font-family: Roboto, sans-serif;
    font-size: 16px;
    border-radius: 4px;
    margin-bottom: 50px;
    border: 2px solid #444444;

    &::placeholder {
      color: #444;
    }
  }

  &__image {
    display: flex;
    flex-direction: column;
    max-width: fit-content;
    width: 100%;
    margin-bottom: 50px;

    span {
      margin-bottom: 10px;
      font-style: normal;
      font-weight: normal;
      font-size: 20px;
      line-height: 110%;
      letter-spacing: -0.1em;
    }

    input {
      font-size: 18px;
      font-family: Roboto,Arial,sans-serif;
      color: #48484A;
    }
  }

  &__choice {
    display: flex;
    flex-direction: column;
    max-width: 200px;
    width: 100%;

    span {
      margin-bottom: 10px;
      font-style: normal;
      font-weight: normal;
      font-size: 20px;
      line-height: 110%;
      letter-spacing: -0.1em;
    }

    ul {
      padding: 0;
      margin: 0;
      list-style: none;

      .article-add__tab-active::after {
        content: "";
        position: absolute;
        left: 5px;
        top: 7px;
        width: 8px;
        height: 8px;
        background-color: #112877;
        border-radius: 50%;
      }

      li {
        position: relative;
        margin-bottom: 10px;
        padding-left: 30px;
      }

      li::before {
        box-shadow: inset 0 0 0 2px #444444;
        border-radius: 50%;
      }

      li::before {
        content: "";
        position: absolute;
        width: 18px;
        height: 18px;
        top: 2px;
        left: 0;
        background-color: #ffffff;
      }
    }


    /*select {
      padding: 15px;
      border-radius: 3px;
      border: 2px solid #444444;
    }
    select {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      -webkit-box-pack: start;
      -ms-flex-pack: start;
      justify-content: flex-start;
      width: 100%;
      -webkit-transition: box-shadow .3s,opacity .3s;
      transition: box-shadow .3s,opacity .3s;
      border-radius: 3px;
      -webkit-appearance: none;
      -moz-appearance:    none;
      appearance:         none;
      padding: 15px;
      border: 2px solid #444444;
      font-size: 18px;
      font-family: Roboto,Arial,sans-serif;
      color: #48484A;
      background: #fff url("data:image/svg+xml,%3Csvg width='17' height='16' viewBox='0 0 17 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M3 6.5L8.5 12L14 6.5' stroke='%23444444' stroke-width='1.25' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A") no-repeat 160px 17px;
    }

    select:hover {
      -webkit-appearance: none;
      box-shadow: 0 0 0 1px #30343b, 0 0 0 0 transparent inset, 0 0 0 1px #30343b;
    }

    select::-ms-expand {
      display: none;
    }*/
  }

  &__buttons {
    display: flex;
    flex-wrap: wrap;
  }

  &__btn {
    text-align: center;
    text-align: -webkit-center;
    margin-right: 20px;

    .ui-btn {
      display: block;
      margin-left: 0;
      margin-right: auto;
      border: none;
      outline: none;
      cursor: pointer;
      background: #112877;
      padding: 9px 82px;
      color: #F1ECFF;
      font-style: normal;
      font-weight: normal;
      font-size: 24px;
      line-height: 110%;
      letter-spacing: -0.09em;
    }
  }
  &__buttons:last-child {
    margin-right: 0;
  }

  &__btn-cancel button {
    background: #B9B9B9 !important;
    color: #444444 !important;
  }

  &__btn-cancel button:hover {
    background: #a0a0a0 !important;
  }

  &__btn-delete {
    margin-right: 0;
    margin-left: auto;
  }

  &__btn-delete button {
    background: #E43B47 !important;
  }

  &__btn-delete button:hover {
    background: #cf1d29 !important;
  }


}
.modal {
  display: none;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.15); /* Black w/ opacity */

  .modal-content {
    position: relative;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 650px;
    padding: 86px 26px;
    background: #FFFFFF;
    border: 4px solid #868686;
    box-sizing: border-box;
    border-radius: 20px;
  }

  p {
    margin-bottom: 50px;
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    line-height: 110%;
    /* or 40px */
    text-align: center;
    letter-spacing: -0.1em;
    color: #000000;
  }

  .modal-buttons {
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    align-items: center;
    justify-content: center;
  }

  .modal-buttons button {
    cursor: pointer;
    padding: 9px 60px;
  }

  .modal-delete {
    margin-right: 20px;
    background: #E43B47 !important;
    &:hover {
      background: #cf1d29 !important;
    }
  }

  .modal-cancel {
    background: #B9B9B9 !important;
    color: #444444 !important;

    &:hover {
      background: #a0a0a0 !important;
    }
  }
}
</style>
