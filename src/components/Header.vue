<template>
  <header class="main-header">
    <div class="container">
      <nav class="main-navigation">
        <router-link class="main-header-logo" :to="{ name: 'Home' }">
          <img :src="require('@/assets/static/img/cine.svg')" alt="Logo"/>
        </router-link>
        <ul class="site-navigation">
          <li class="site-navigation-item">
            <router-link class="site-navigation-link" :to="{ name: 'Home' }">Новое</router-link>
          </li>
          <li class="site-navigation-item">
            <router-link class="site-navigation-link" :to="{ name: 'Articles' }">Статьи</router-link>
          </li>
          <li class="site-navigation-item">
            <router-link class="site-navigation-link" :to="{ name: 'Reviews' }">Рецензии</router-link>
          </li>
          <li class="site-navigation-item">
            <router-link class="site-navigation-link" :to="{ name: 'About' }">О проекте</router-link>
          </li>
<!--          <li v-if="!isAuth" class="site-navigation-item">-->
<!--            <router-link class="site-navigation-link" :to="{ name: 'Login' }">Войти</router-link>-->
<!--          </li>-->
          <li v-if="isAuth" class="site-navigation-item">
            <router-link class="site-navigation-link" :to="{ name: 'ArticlesAuthorList' }">Профиль</router-link>
          </li>
<!--          <li v-if="isAuth" class="site-navigation-item">-->
<!--            <span class="site-navigation-link" @click="logout">Выйти</span>-->
<!--          </li>-->

          <li class="site-navigation-item">
            <button class="site-navigation-link" @click="searchOpen">
              <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M23.6696 21.5777C24.1101 22.0183 24.1101 22.7327 23.6696 23.1733C23.229 23.6138 22.5146 23.6138 22.074 23.1733L18.1253 19.2245C17.6847 18.7839 17.6847 18.0696 18.1253 17.629C18.5659 17.1884 19.2802 17.1884 19.7208 17.629L23.6696 21.5777ZM11.0256 19.555C6.04092 19.555 2 15.5141 2 10.5293C2 5.54458 6.04092 1.50366 11.0256 1.50366C16.0104 1.50366 20.0513 5.54458 20.0513 10.5293C20.0513 15.5141 16.0104 19.555 11.0256 19.555ZM11.0256 17.2986C14.7642 17.2986 17.7949 14.2679 17.7949 10.5293C17.7949 6.79076 14.7642 3.76007 11.0256 3.76007C7.2871 3.76007 4.25641 6.79076 4.25641 10.5293C4.25641 14.2679 7.2871 17.2986 11.0256 17.2986Z"
                    fill="#F1ECFF"/>
              </svg>
            </button>
          </li>
        </ul>
        <div id="search-block" class="search">
          <button class="search__button" @click="search">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M23.6696 21.074C24.1101 21.5146 24.1101 22.229 23.6696 22.6696C23.229 23.1101 22.5146 23.1101 22.074 22.6696L18.1253 18.7208C17.6847 18.2802 17.6847 17.5659 18.1253 17.1253C18.5659 16.6847 19.2802 16.6847 19.7208 17.1253L23.6696 21.074ZM11.0256 19.0513C6.04092 19.0513 2 15.0104 2 10.0256C2 5.04092 6.04092 1 11.0256 1C16.0104 1 20.0513 5.04092 20.0513 10.0256C20.0513 15.0104 16.0104 19.0513 11.0256 19.0513ZM11.0256 16.7949C14.7642 16.7949 17.7949 13.7642 17.7949 10.0256C17.7949 6.2871 14.7642 3.25641 11.0256 3.25641C7.2871 3.25641 4.25641 6.2871 4.25641 10.0256C4.25641 13.7642 7.2871 16.7949 11.0256 16.7949Z" fill="#112877"/>
            </svg>
          </button>
          <label class="visually-hidden" for="site-search">Search the site:</label>
          <input type="search" id="site-search" class="search__input" name="search" aria-label="Search through site content" v-model="searchValue" v-on:keyup.enter="search">
          <button class="search__button search__close" @click="searchClose">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_339_960)">
                <line x1="0.707107" y1="1.29289" x2="20.7071" y2="21.2929" stroke="#112877" stroke-width="2"/>
                <line x1="1.29289" y1="21.2929" x2="21.2929" y2="1.29289" stroke="#112877" stroke-width="2"/>
              </g>
              <defs>
                <clipPath id="clip0_339_960">
                  <rect width="22" height="22" fill="white"/>
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      searchValue: ''
    }
  },
  computed: {
    isAuth() {
      return !!localStorage.getItem('accessToken')
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('auth/logout')
          .then(() => {
            this.$router.push({name: 'Home'});
            window.location.reload();
          })
    },
    search() {
      this.$store.dispatch('articles/search', this.searchValue)
          .then((response) => {
            this.$router.push({name: 'ArticleSearchResult', params: { name: this.searchValue, articles: response.articles }});
          })
          .catch((error) => {
            console.log(error)
          });
    },
    searchOpen() {
      let searchBlock = document.getElementById('search-block');
      let searchInput = document.getElementById('site-search');

      searchBlock.style.visibility = 'visible';
      searchBlock.style.opacity = '1';
      document.getElementsByClassName('site-navigation')[0].style.display = 'none';

      searchInput.focus();
    },
    searchClose() {
      let searchBlock = document.getElementById('search-block');
      searchBlock.style.visibility = 'hidden';
      searchBlock.style.opacity = '0';
      document.getElementsByClassName('site-navigation')[0].style.display = 'flex';
    }
  }
};
</script>

<style scoped lang="scss">
@mixin menu-link {
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 110%;
  color: #f1ecff;
}

header {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100px;
  background: #112877;
}

.main-navigation {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
}

.main-header-logo {
  text-align: left;
}

.site-navigation {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  list-style: none;
}

.site-navigation-item {
  margin-right: 50px;
}

.site-navigation-item:last-child {
  margin-right: 0;
}

.site-navigation-link {
  @include menu-link;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
  outline: none;
  background: none;
  border: none;
}

.site-navigation-link:hover {
  text-decoration: underline;
}

.site-navigation-link.router-link-exact-active {
  text-decoration: underline;
}

.search {
  position: absolute;
  display: flex;
  align-items: stretch;
  flex-direction: row;
  visibility: hidden;
  right: 0;
  opacity: 0;
  transition: visibility 0s, opacity 0.5s linear;
  &__button {
    display: flex;
    align-items: center;
    background: #FFFFFF;
    border: none;
    padding: 0 10px;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    cursor: pointer;
  }
  &__input {
    width: 500px;
    padding: 10px;
    font-size: 20px;
    font-family: Roboto, sans-serif;
    border: none;

    &:focus-visible {
      outline: none;
    }

    &::placeholder {
      color: #444;
    }

    &__focused {
      box-shadow: 0 0 0 1px #112877;
      background: #F0FDFF;
    }
  }
  &__close {
    //background-image: url("data:image/svg+xml,%3Csvg width='25' height='24' viewBox='0 0 25 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cline y1='-1' x2='31.1127' y2='-1' transform='matrix(0.707107 0.707107 -0.673509 0.739179 1 2)' stroke='%23112877' stroke-width='2'/%3E%3Cline y1='-1' x2='30.4138' y2='-1' transform='matrix(0.690476 -0.723356 0.690476 0.723356 2 24)' stroke='%23112877' stroke-width='2'/%3E%3C/svg%3E%0A");
    //background-repeat:no-repeat;
    //background-position:right;
    //outline:0;
    //width: 25px;
    //height: 24px;
    //cursor: pointer;
    border-radius: 0 4px 4px 0;
  }
  &__input::-webkit-search-cancel-button{
    -webkit-appearance: none;
  }
}

@media (max-width: 991px) {
  .site-navigation {
    display: none;
  }
}
</style>
