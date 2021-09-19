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
.container {
  max-width: 1400px;
  width: 100%;
  padding: 0 30px;
}
</style>
