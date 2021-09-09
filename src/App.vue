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
</style>
