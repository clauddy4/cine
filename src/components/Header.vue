<template>
  <header class="main-header">
    <div class="container">
      <nav class="main-navigation">
        <a class="main-header-logo">
          <img :src="images.sample" alt="Logo" />
        </a>
        <ul class="site-navigation">
          <li class="site-navigation-item"><router-link class="site-navigation-link" :to="{ name: 'Home' }">Новое</router-link></li>
          <li class="site-navigation-item"><router-link class="site-navigation-link" :to="{ name: 'Articles' }">Статьи</router-link></li>
          <li class="site-navigation-item"><router-link class="site-navigation-link" :to="{ name: 'ff' }">Рецензии</router-link></li>
          <li class="site-navigation-item"><router-link class="site-navigation-link" :to="{ name: 'Movies' }">Фильмы</router-link></li>
          <li class="site-navigation-item"><router-link class="site-navigation-link" :to="{ name: 'About' }">О проекте</router-link></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      images: {
        sample: require('@/assets/static/images/cine.svg')
      }
    }
  }
};
</script>

<style scoped>
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
  margin-right: 80px;
}
.site-navigation-item:last-child {
  margin-right: 0;
}
.site-navigation-link {
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 110%;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #f1ecff;
  text-decoration: none;
}

</style>
