<template>
  <footer>
    <div class="container">
      <div class="footer-container">
        <div class="footer-left">
          <a class="footer-left-logo">
            <img :src="images.sample" alt="Logo" />
          </a>
          <div class="footer-left-emails">
            <a class="footer-email">swanky123@gmail.com</a>
            <a class="footer-email">swanky@gmail.com</a>
          </div>
        </div>
        <div class="footer-menu">
          <ul class="footer-navigation">
            <li class="footer-navigation-item"><router-link class="footer-navigation-link" :to="{ name: 'Home' }">Новое</router-link></li>
            <li class="footer-navigation-item"><router-link class="footer-navigation-link" :to="{ name: 'Articles' }">Статьи</router-link></li>
            <li class="footer-navigation-item"><router-link class="footer-navigation-link" :to="{ name: 'ff' }">Рецензии</router-link></li>
            <li class="footer-navigation-item"><router-link class="footer-navigation-link" :to="{ name: 'Movies' }">Фильмы</router-link></li>
            <li class="footer-navigation-item"><router-link class="footer-navigation-link" :to="{ name: 'About' }">О проекте</router-link></li>
          </ul>
          <ul class="footer-navigation">
            <li class="footer-navigation-item"><router-link class="footer-navigation-link" :to="{ name: 'Home' }">Новое</router-link></li>
            <li class="footer-navigation-item"><router-link class="footer-navigation-link" :to="{ name: 'Articles' }">Статьи</router-link></li>
          </ul>
        </div>
        <div class="footer-social">
          <p class="footer-social-title">Мы в соцсетях</p>
          <div class="footer-social-links">
            <a class="footer-social-link">ВКонтакте</a>
            <a class="footer-social-link">Инстаграм</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      images: {
        sample: require('@/assets/static/images/cine.svg')
      }
    }
  }
};
</script>

<style scoped lang="scss">
footer {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 300px;
  background: #112877;
}
.footer-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.footer-left {
  text-align: left;
}
.footer-left-logo {
  display: block;
  margin-bottom: 10px;
}
.footer-left-emails {
  display: flex;
  flex-direction: column;
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 110%;
  letter-spacing: 0.06em;
  text-transform: lowercase;
  color: #F1ECFF;
}
.footer-email {
  margin-bottom: 10px;
}
.footer-email:last-child {
  margin-bottom: 0;
}
.footer-menu {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.footer-navigation {
  list-style: none;
}
</style>