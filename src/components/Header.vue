<template>
  <header class="main-header">
    <div class="container">
      <nav class="main-navigation">
        <a class="main-header-logo">
          <img :src="require('@/assets/static/images/cine.svg')" alt="Logo" />
        </a>
        <ul class="site-navigation">
          <li class="site-navigation-item"><router-link class="site-navigation-link" :to="{ name: 'Home' }">Новое</router-link></li>
          <li class="site-navigation-item"><router-link class="site-navigation-link" :to="{ name: 'Articles' }">Статьи</router-link></li>
          <li class="site-navigation-item"><router-link class="site-navigation-link" :to="{ name: 'ff' }">Рецензии</router-link></li>
          <li class="site-navigation-item"><router-link class="site-navigation-link" :to="{ name: 'Movies' }">Фильмы</router-link></li>
          <li class="site-navigation-item"><router-link class="site-navigation-link" :to="{ name: 'About' }">О проекте</router-link></li>
          <li class="site-navigation-item">
            <a class="site-navigation-link" href="#">
              <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.6696 21.5777C24.1101 22.0183 24.1101 22.7327 23.6696 23.1733C23.229 23.6138 22.5146 23.6138 22.074 23.1733L18.1253 19.2245C17.6847 18.7839 17.6847 18.0696 18.1253 17.629C18.5659 17.1884 19.2802 17.1884 19.7208 17.629L23.6696 21.5777ZM11.0256 19.555C6.04092 19.555 2 15.5141 2 10.5293C2 5.54458 6.04092 1.50366 11.0256 1.50366C16.0104 1.50366 20.0513 5.54458 20.0513 10.5293C20.0513 15.5141 16.0104 19.555 11.0256 19.555ZM11.0256 17.2986C14.7642 17.2986 17.7949 14.2679 17.7949 10.5293C17.7949 6.79076 14.7642 3.76007 11.0256 3.76007C7.2871 3.76007 4.25641 6.79076 4.25641 10.5293C4.25641 14.2679 7.2871 17.2986 11.0256 17.2986Z" fill="#F1ECFF"/>
              </svg>
            </a>
          </li>
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
  @include menu-link;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
}
@media (max-width: 1180px) {
  .site-navigation {
    display: none;
  }
}
</style>
