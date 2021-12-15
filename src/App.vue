<template>
  <div id="app">
    <MainLayout>
      <router-view />
    </MainLayout>
  </div>
</template>

<script>
import MainLayout from "./layouts/Main";

export default {
  components: {
    MainLayout
  }
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap');

* {
  margin: 0;
  padding: 0;
}

body {
  font-family: Roboto, sans-serif;
  font-style: normal;
  color: #000000;
}

.container {
  max-width: 1200px;
  width: 100%;
  padding: 0 30px;
}

.link {
  color: #000000;
  text-decoration: none;
}

.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
}

.main-container {
  max-width: 1200px;
  margin: 130px auto;
}

.content {
  padding: 0 15px;
}

.content__title {
  margin-bottom: 70px;
  padding-left: 15px;
  font-weight: bold;
  font-size: 48px;
  text-transform: uppercase;
}

.content__article-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
